import { useEffect, useState } from 'react'
import { loadProjects } from '../Genesis'
import { useGlobalState } from '../store'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [projects] = useGlobalState('projects')

  useEffect(() => {
    loadProjects().then(() => setLoaded(true))
  }, [])

  return loaded ? (
    <>
      <Hero />
      <Projects projects={projects} />
    </>
  ) : null
}

export default Home
