import UpdateProject from '../components/UpdateProject'
import BackProject from '../components/BackProject'
import DeleteProject from '../components/DeleteProject'
import ProjectDetails from '../components/ProjectDetails'
import ProjectBackers from '../components/ProjectBackers'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadProject } from '../Genesis'
import { useGlobalState } from '../store'

const Project = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')

  useEffect(() => {
    loadProject(id).then(() => setLoaded(true))
  }, [])

  return loaded ? (
    <div className="flex flex-col lg:w-4/5 w-full mx-auto px-5">
      <div className="my-5"></div>
      <ProjectDetails id={id} project={project} />
      <div className="my-5"></div>
      <ProjectBackers backers={backers} />
      <UpdateProject project={project} />
      <BackProject project={project} />
      <DeleteProject project={project} />
      <div className="my-5"></div>
    </div>
  ) : null
}

export default Project
