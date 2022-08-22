import ChatAuth from '../components/ChatAuth'
import BackProject from '../components/BackProject'
import UpdateProject from '../components/UpdateProject'
import ProjectDetails from '../components/ProjectDetails'
import ProjectBackers from '../components/ProjectBackers'
import DeleteProject from '../components/DeleteProject'
import { loadProject } from '../Genesis'
import { useGlobalState } from '../store'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <ProjectDetails project={project} />
      <div className="my-5"></div>
      {backers.length > 0 ? <ProjectBackers backers={backers} /> : null}
      <UpdateProject project={project} />
      <DeleteProject project={project} />
      <BackProject project={project} />
      <ChatAuth project={project} />
      <div className="my-5"></div>
    </div>
  ) : null
}

export default Project
