import Identicon from 'react-identicons'
import { Link } from 'react-router-dom'
import { FaEthereum } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {Array(10)
        .fill()
        .map((item, i) => (
          <Project id={i} key={i} />
        ))}
    </div>
  )
}

const Project = ({ id }) => (
  <div className="rounded-lg shadow-lg bg-white max-w-xs m-4">
    <Link
      to={`/products/${id}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      <img
        className="rounded-2xl"
        src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
        alt=""
      />
    </Link>
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h5 className="text-gray-900 text-sm font-medium mb-2">
          Build a fog cleaner
        </h5>
        <small className="text-gray-500">2 days left</small>
      </div>
      <div className="flex justify-start items-center space-x-2 mb-3">
        <Identicon
          className="rounded-full shadow-md"
          string={'account'}
          size={15}
        />
        <small className="text-gray-700">0xf1...ed5</small>
      </div>
      <div className="w-full bg-gray-300 rounded-full">
        <div
          className="bg-green-600 text-xs font-medium text-green-100 text-center
        p-0.5 leading-none rounded-l-full w-10 h-1"
        ></div>
      </div>
      <div className="flex justify-between items-center font-bold mt-1 mb-2">
        <small className="flex justify-start items-center">
          <FaEthereum />
          <span className="text-gray-700">7.8 EHT</span>
        </small>
        <small className="text-green-700">5.3 ETH Raised</small>
      </div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <div className="flex justify-start items-center space-x-2">
          <Identicon
            className="rounded-full shadow-md"
            string={'Testing' + 1}
            size={25}
          />
          <Identicon
            className="rounded-full shadow-md"
            string={'Testing' + 2}
            size={25}
          />
          <Identicon
            className="rounded-full shadow-md"
            string={'Testing' + 3}
            size={25}
          />
          <Identicon
            className="rounded-full shadow-md"
            string={'Testing' + 4}
            size={25}
          />
          <Identicon
            className="rounded-full shadow-md"
            string={'Testing' + 5}
            size={25}
          />
        </div>
        <small className="text-gray-500">+58 Backers</small>
      </div>
    </div>
  </div>
)

export default Projects
