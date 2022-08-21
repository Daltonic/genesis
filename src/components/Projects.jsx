import { useEffect, useState } from 'react'
import ProjectCard from "./ProjectCard"

const Projects = ({projects}) => {
  const [end, setEnd] = useState(1)
  const [count] = useState(1)

  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return projects.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [projects, end])

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center flex-wrap">
        {collection.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>

      {projects.length > 0 && projects.length > collection.length ? (
        <div className="flex justify-center items-center my-5">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
            leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setEnd(end + count)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Projects
