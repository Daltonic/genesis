const Header = () => {
  return (
    <header className="relative w-full flex flex-wrap items-center justify-between py-5 bg-white
    text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a className="text-xl text-black" href="#">
            Genesis
          </a>
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
            leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
