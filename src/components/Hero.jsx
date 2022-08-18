import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [stats] = useGlobalState('stats')

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView()
  }

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">Bring creative projects to life on</span>
        <br />
        <span className="text-green-600">GENESIS.</span>
      </h1>
      <button
        className="inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm
        leading-snug uppercase shadow-md hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 rounded-full
        active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={() => setGlobalState('modal', 'scale-100')}
      >
        Add Project
      </button>
      <button
        className="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm
        leading-snug uppercase hover:text-green-700 hover:bg-gray-100
        focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200
        transition duration-150 ease-in-out rounded-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={scrollToProjects}
      >
        Back Projects
      </button>

      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {stats.totalProjects}
          </span>
          <span>Projects</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {stats.totalBacking}
          </span>
          <span>Backing</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            {stats.totalDonations} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
