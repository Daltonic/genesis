import Identicon from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { daysRemaining, truncate, useGlobalState } from '../store'
import { useEffect, useState } from 'react'
import { loadProject } from '../Genesis'

const Project = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')

  useEffect(() => {
    loadProject(id).then(() => setLoaded(true))
  }, [])

  return loaded ? (
    <div className="flex flex-col sm:w-2/3 w-full mx-auto">
      <div className="my-5"></div>
      <Details id={id} project={project} />
      <div className="my-5"></div>
      <Backers />
    </div>
  ) : null
}

const Details = ({ id, project }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-start items-start sm:space-x-3 flex-wrap">
        <img
          className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          src={project.imageURL}
          alt={project.title}
        />
        <div className="flex-1 sm:py-0 py-4">
          <div className="flex justify-start space-x-2">
            <h5 className="text-gray-900 text-sm font-medium mb-2">
              {project.title}
            </h5>
            <small className="text-gray-500">
              {daysRemaining(project.expiresAt)}
            </small>
          </div>
          <div className="flex justify-start items-center space-x-2 mb-3">
            <Identicon
              className="rounded-full shadow-md"
              string={project.owner}
              size={15}
            />
            <div className="flex justify-start items-center space-x-2">
              <small className="text-gray-700">
                {truncate(project.owner, 4, 4, 11)}
              </small>
              <small className="text-gray-500 font-bold">
                {project.backers} Backer{project.backer == 1 ? '' : 's'}
              </small>
              {/* <small className="text-red-500 font-bold">Reverted</small> */}
              <small className="text-green-500 font-bold">Accepted</small>
            </div>
          </div>
          <p className="text-sm font-light">{project.description}</p>
          <div className="w-full bg-gray-300 rounded-full mt-4">
            <div
              className="bg-green-600 text-xs font-medium
            text-green-100 text-center p-0.5 leading-none
            rounded-l-full w-10 h-1"
            ></div>
          </div>
          <div className="flex justify-between items-center font-bold mt-2">
            <small className="text-green-700">
              {project.raised} ETH Raised
            </small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span className="text-gray-700">{project.cost} EHT</span>
            </small>
          </div>

          <div className="flex justify-start items-center space-x-2 font-bold mt-4 w-full">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
              leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
              focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Back Project
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs 
              leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg
              focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => navigate(`/chats/` + id)}
            >
              Chat
            </button>
          </div>
        </div>
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
