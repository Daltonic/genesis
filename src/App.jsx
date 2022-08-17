import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { loadBlockchain, isWallectConnected } from './Genesis'
import Header from './components/Header'
import AddButton from './components/AddButton'
import CreateProject from './components/CreateProject'
import Home from './views/Home'
import Project from './views/Project'
import Chat from './views/Chat'

const App = () => {
  useEffect(() => {
    isWallectConnected().then(() => {
      loadBlockchain().then(() => console.log('Blockchain Loaded!'))
    })
  }, [])
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/chats/:id" element={<Chat />} />
      </Routes>
      <AddButton />
      <CreateProject />
    </div>
  )
}

export default App
