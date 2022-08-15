//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Genesis {
    address public owner;
    uint public projectTax;
    uint public projectCount;
    uint public BACKING_PERIOD = 7 days;
    uint public balance;
    projectStruct[] projects;

    mapping(address => projectStruct[]) projectsOf;
    mapping(uint => accStruct[]) backersOf;
    mapping(uint => bool) public projectExist;

    enum statusEnum {
        OPEN,
        APPROVED,
        REVERTED,
        DELETED,
        REFUNDED
    }

    struct accStruct {
        address owner;
        uint contribution;
    }

    struct projectStruct {
        uint id;
        address owner;
        string title;
        string description;
        string imageURL;
        uint cost;
        uint raised;
        uint timestamp;
        uint expiresAt;
        statusEnum status;
    }

    modifier ownerOnly(){
        require(msg.sender == owner, "Owner reserved only");
        _;
    }

    event Action (
        uint256 id,
        string actionType,
        address indexed executor,
        uint256 timestamp
    );

    constructor(uint _projectTax) {
        owner = msg.sender;
        projectTax = _projectTax;
    }

    function createProject(
        string memory title,
        string memory description,
        string memory imageURL,
        uint cost
    ) public returns (bool) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "ImageURL cannot be empty");

        projectStruct memory project;
        project.id = projectCount;
        project.owner = msg.sender;
        project.title = title;
        project.description = description;
        project.imageURL = imageURL;
        project.cost = cost;
        project.timestamp = block.timestamp;
        project.expiresAt = block.timestamp + BACKING_PERIOD;

        projects.push(project);
        projectExist[projectCount] = true;
        projectsOf[msg.sender].push(project);

        emit Action (
            projectCount++,
            "PROJECT CREATED",
            msg.sender,
            block.timestamp
        );
        return true;
    }

    function updateProject(
        uint id,
        string memory title,
        string memory description,
        string memory imageURL
    ) public returns (bool) {
        require(msg.sender == projects[id].owner, "Unauthorized Entity");
        require(projectExist[id], "Project not found");
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "ImageURL cannot be empty");

        projects[id].title = title;
        projects[id].description = description;
        projects[id].imageURL = imageURL;

        emit Action (
            id,
            "PROJECT UPDATED",
            msg.sender,
            block.timestamp
        );

        return true;
    }

    function deleteProject(uint id) public returns (bool) {
        require(projectExist[id], "Project not found");
        require(projects[id].status == statusEnum.OPEN, "Project not opened");
        require(
            msg.sender == projects[id].owner ||
            msg.sender == owner,
            "Unauthorized Entity"
        );

        projects[id].status = statusEnum.DELETED;
        projectExist[id] = false;

        emit Action (
            id,
            "PROJECT DELETED",
            msg.sender,
            block.timestamp
        );

        return true;
    }

    function performPayout(uint id) internal {
        require(projects[id].status == statusEnum.APPROVED, "Project not APPROVED");

        uint raised = (projects[id].raised * projectTax) / 100;
        uint tax = (raised * projectTax) / 100;

        payTo(projects[id].owner, tax);
        payTo(owner, (raised - tax));

        balance -= raised - tax;
    }

    function performRefund(uint id) internal {
        require(projects[id].status == statusEnum.REVERTED, "Project not marked for revert");
        
        for(uint i = 0; i < backersOf[id].length; i++) {
            address _owner = backersOf[id][i].owner;
            uint _contribution = backersOf[id][i].contribution;
            payTo(_owner, _contribution);
            balance -= _contribution;
        }

        delete backersOf[id];
        projects[id].status = statusEnum.REFUNDED;
    }

    function requestRefund(uint id) public returns (bool) {
        require(block.timestamp >= projects[id].expiresAt, "Project not expired");
        require(projects[id].status != statusEnum.REFUNDED, "Project already refunded");
        
        projects[id].status = statusEnum.REVERTED;
        performRefund(id);
        return true;
    }

    function backProject(uint id) public payable returns (bool) {
        require(msg.value > 0 ether, "Ether must be greater than zero");
        require(projectExist[id], "Project not found");
        require(projects[id].status == statusEnum.OPEN, "Project not opened");

        balance += msg.value;
        projects[id].raised += msg.value;
        backersOf[id].push(accStruct(msg.sender, msg.value));

        emit Action (
            id,
            "PROJECT BACKED",
            msg.sender,
            block.timestamp
        );

        if(block.timestamp >= projects[id].expiresAt) {
            projects[id].status = statusEnum.REVERTED;
            performRefund(id);
            return true;
        }

        if(projects[id].raised >= projects[id].cost) {
            projects[id].status = statusEnum.APPROVED;
            performPayout(id);
            return true;
        }

        return true;
    }

    function changeTax(uint _taxPct) public ownerOnly {
        projectTax = _taxPct;
    }
    
    function changePeriod(uint _days) public ownerOnly {
        BACKING_PERIOD = _days * 1 days;
    }

    function getProject(uint id) public view returns (projectStruct memory) {
        require(projectExist[id], "Project not found");
        require(projects[id].status != statusEnum.DELETED, "Project already deleted");

        return projects[id];
    }
    
    function getProjects() public view returns (projectStruct[] memory) {
        return projects;
    }

    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }
}