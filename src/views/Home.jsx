import { useEffect, useState } from 'react'
import { loadProjects } from '../Genesis'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    loadProjects().then(() => {
      console.log('Projects Loaded!')
      setLoaded(true)
    })
  }, [])

  return loaded ? (
    <>
      <Hero />
      <Projects />
    </>
  ) : null
}

export default Home
