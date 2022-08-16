import abi from './abis/src/contracts/Genesis.sol/Genesis.json'
import { setGlobalState } from './store'
import { ethers } from 'ethers'

const { ethereum } = window
const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const contractAbi = abi.abi

const getEtheriumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, contractAbi, signer)

  return contract
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

export { getEtheriumContract, isWallectConnected, connectWallet }
