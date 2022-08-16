const hre = require("hardhat");

async function main() {
  const taxFee = 5
  const Contract = await hre.ethers.getContractFactory('Genesis')
  const contract = await Contract.deploy(taxFee)
  
  await contract.deployed()
  console.log('Deployed contract address', contract.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
