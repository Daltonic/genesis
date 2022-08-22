import { useEffect, useState } from 'react'
import { isWallectConnected } from './Genesis'
import { Route, Routes } from 'react-router-dom'
import { useGlobalState } from './store'
import { checkAuthState } from './CometChat'
import Header from './components/Header'
import AddButton from './components/AddButton'
import CreateProject from './components/CreateProject'
import Home from './views/Home'
import Project from './views/Project'
import Chat from './views/Chat'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
    checkAuthState()
    isWallectConnected().then(() => {
      console.log('Blockchain Loaded')
      setLoaded(true)
    })
  }, [])

  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="mt-20"></div>
      
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/chats/:id" element={<Chat />} />
        </Routes>
      ) : null}

      {connectedAccount ? (
        <>
          <AddButton />
          <CreateProject />
        </>
      ) : null}
    </div>
  )
}

export default App
