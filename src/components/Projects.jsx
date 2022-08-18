import Identicon from 'react-identicons'
import { Link } from 'react-router-dom'
import { FaEthereum } from 'react-icons/fa'
import { daysRemaining, truncate, useGlobalState } from '../store'

const Projects = () => {
  const [projects] = useGlobalState('projects')

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center flex-wrap">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>

      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
        leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Load More
        </button>
      </div>
    </div>
  )
}

const Project = ({ project }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
    <Link
      to={`/projects/${project.id}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      <img
        className="rounded-xl h-64 w-full object-cover"
        src={project.imageURL}
        alt={project.title}
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
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
          <small className="text-gray-700">
            {truncate(project.owner, 4, 4, 11)}
          </small>
        </div>
        <div className="w-full bg-gray-300 rounded-full">
          <div
            className="bg-green-600 text-xs font-medium text-green-100 text-center
        p-0.5 leading-none rounded-l-full w-10 h-1"
          ></div>
        </div>
        <div className="flex justify-between items-center font-bold mt-1 mb-2">
          <small className="text-green-700">{project.raised} ETH Raised</small>
          <small className="flex justify-start items-center">
            <FaEthereum />
            <span className="text-gray-700">{project.cost} EHT</span>
          </small>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-4 mb-2">
          <small className="text-gray-500 font-bold">
            {project.backers} Backer{project.backer == 1 ? '' : 's'}
          </small>
        </div>
      </div>
    </Link>
  </div>
)

export default Projects
