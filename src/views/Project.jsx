import Identicon from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'

const Project = () => {
  return (
    <div className="flex justify-start items-center flex-col flex-wrap p-6">
      <Details />
      <div className='my-5'></div>
      <Backers />
    </div>
  )
}

const Details = () => {
  return (
    <div className="flex justify-start items-start sm:space-x-3 flex-wrap">
      <img
        className="rounded-2xl sm:w-1/3 w-full"
        src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
        alt=""
      />
      <div className="flex-1 sm:py-0 py-4">
        <div className="flex justify-start space-x-2">
          <h5 className="text-gray-900 text-sm font-medium mb-2">
            Build a fog cleaner
          </h5>
          <small className="text-gray-500">2 days left</small>
        </div>
        <div className="flex justify-start items-center space-x-2 mb-3">
          <Identicon
            className="rounded-full shadow-md"
            string={'account'}
            size={15}
          />
          <div className="flex justify-start items-center space-x-2">
            <small className="text-gray-700">0xf1...ed5</small>
            <small className="text-gray-500 font-bold">+58 Backers</small>
          </div>
        </div>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          harum doloremque, eveniet cum, expedita numquam perspiciatis quo
          ipsam nostrum, quisquam quibusdam aperiam iure ex aspernatur amet
          mollitia vero saepe a.
        </p>
        <div className="w-full bg-gray-300 rounded-full mt-4">
          <div
            className="bg-green-600 text-xs font-medium
            text-green-100 text-center p-0.5 leading-none
            rounded-l-full w-10 h-1"
          ></div>
        </div>
        <div className="flex justify-between items-center font-bold my-2">
          <small className="flex justify-start items-center">
            <FaEthereum />
            <span className="text-gray-700">7.8 EHT</span>
          </small>
          <small className="text-green-700">5.3 ETH Raised</small>
        </div>
      </div>
    </div>
  )
}

const Backers = () => {
  return (
    <div className="flex justify-start items-start sm:space-x-3 flex-wrap w-full">
      <h4>Recent</h4>
    </div>
  )
}

export default Project
