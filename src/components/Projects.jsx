import Identicon from 'react-identicons'
import { Link } from 'react-router-dom'
import { FaEthereum } from 'react-icons/fa'
import { useGlobalState } from '../store'

const Projects = () => {
  const [projects] = useGlobalState('projects')

  return (
    <div className="flex justify-center items-center flex-wrap">
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
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
          <small className="text-gray-500">2 days left</small>
        </div>
        <div className="flex justify-start items-center space-x-2 mb-3">
          <Identicon
            className="rounded-full shadow-md"
            string={'account'}
            size={15}
          />
          <small className="text-gray-700">0xf1...ed5</small>
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
          <div className="flex justify-start items-center space-x-2">
            <Identicon
              className="rounded-full shadow-md"
              string={'Testing' + 1}
              size={25}
            />
            <Identicon
              className="rounded-full shadow-md"
              string={'Testing' + 2}
              size={25}
            />
            <Identicon
              className="rounded-full shadow-md"
              string={'Testing' + 3}
              size={25}
            />
            <Identicon
              className="rounded-full shadow-md"
              string={'Testing' + 4}
              size={25}
            />
            <Identicon
              className="rounded-full shadow-md"
              string={'Testing' + 5}
              size={25}
            />
          </div>
          <small className="text-gray-500 font-bold">+58 Backers</small>
        </div>
      </div>
    </Link>
  </div>
)

export default Projects
