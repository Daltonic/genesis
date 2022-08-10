import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddButton from './components/AddButton'
import CreateProject from './components/CreateProject'
import Home from './views/Home'
import Project from './views/Project'

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <AddButton />
      <CreateProject />
    </div>
  )
}

export default App
