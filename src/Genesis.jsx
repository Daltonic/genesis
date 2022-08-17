import abi from './abis/src/contracts/Genesis.sol/Genesis.json'
import address from './abis/contractAddress.json'
import { getGlobalState, setGlobalState } from './store'
import { ethers } from 'ethers'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi

const getEtheriumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    return contract
  } else {
    return getGlobalState('contract')
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      console.log('No accounts found.')
    }
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const createProject = async ({ title, description, imageURL, cost }) => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const connectedAccount = getGlobalState('connectedAccount')
    const contract = getGlobalState('contract')
    cost = ethers.utils.parseEther(cost)

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: connectedAccount,
          gas: '0x5208',
        },
      ],
    })

    await contract.createProject(title, description, imageURL, cost)

    const projects = await contract.getProjects()
    // setGlobalState('projects', structuredProjects(projects))
    console.log(projects)
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const getAllProjects = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const contract = getEtheriumContract()
    const projects = await contract.getProjects()

    // setGlobalState('projects', projects)
    console.log(projects)
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const structuredProjects = (projects) => {
  projects
    .map((project) => ({
      id: project.id,
      owner: project.owner,
      title: project.title,
      description: project.description,
      timestamp: new Date(project.timestamp.toNumber() * 1000).toLocaleString(),
      expiresAt: new Date(project.expiresAt.toNumber() * 1000).toLocaleString(),
      imageURL: project.imageURL,
      cost: parseInt(project.cost._hex) / 10 ** 18,
    }))
    .reverse()
}

export {
  getEtheriumContract,
  isWallectConnected,
  connectWallet,
  createProject,
  getAllProjects,
}
