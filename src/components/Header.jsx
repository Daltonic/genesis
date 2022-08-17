import { Link } from 'react-router-dom'
import { TbBusinessplan } from 'react-icons/tb'
import { connectWallet } from '../Genesis'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="w-full flex flex-wrap items-center justify-between p-5 bg-white
    text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg fixed top-0 left-0 right-0"
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between">
        <div className="container-fluid">
          <Link
            to="/"
            className="flex justify-start items-center text-xl text-black"
          >
            <span className="font-body mr-1">Genesis</span>
            <TbBusinessplan />
          </Link>
        </div>
        <div className="flex space-x-2 justify-center">
          {connectedAccount ? (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
              leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
              leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
