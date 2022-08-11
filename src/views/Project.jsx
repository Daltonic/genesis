import Identicon from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'

const Project = () => {
  return (
    <div className="flex justify-center items-center flex-col flex-wrap p-6 sm:w-2/3 w-full mx-auto">
      <Details />
      <div className="my-5"></div>
      <Backers />
    </div>
  )
}

const Details = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div className="flex justify-center items-center flex-col">
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
              {/* <small className="text-red-500 font-bold">Reverted</small> */}
              <small className="text-green-500 font-bold">Accepted</small>
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
          <div className="flex justify-between items-center font-bold mt-2">
            <small className="text-green-700">5.3 ETH Raised</small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span className="text-gray-700">7.8 EHT</span>
            </small>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold mt-4 w-full">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
            leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg border-green-600
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 w-full border
            active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Back Project
        </button>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-transparent border-green-600 text-green-600 font-medium text-xs 
            leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg hover:text-white
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 w-full border
            active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => navigate(`/chats/` + id)}
        >
          Chat
        </button>
      </div>
    </div>
  )
}

const Backers = () => {
  return (
    <div className="flex justify-center flex-col items-start w-full">
      <h4 className="text-center w-full">Recent</h4>
      <div className="h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md w-full">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Donation
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill()
              .map((item, i) => (
                <tr
                  key={i}
                  className="border-b dark:border-gray-500 transition duration-300 ease-in-out"
                >
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-row justify-start items-center space-x-3">
                      <Identicon
                        string={'Testing' + i}
                        size={25}
                        className="h-10 w-10 object-contain rounded-full mr-3"
                      />
                      <span>0x45...4df</span>
                    </div>
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <small className="flex justify-start items-center">
                      <FaEthereum />
                      <span className="text-gray-700">7.8 EHT</span>
                    </small>
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    2 min ago
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Project
