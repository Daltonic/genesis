import AddButton from './components/AddButton'
import CreateProject from './components/CreateProject'
import Header from './components/Header'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className='mt-20'></div>
      <Projects />
      <AddButton />
      <CreateProject />
    </div>
  )
}

export default App
