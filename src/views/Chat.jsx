import Identicon from 'react-identicons'
import { useNavigate, useParams } from 'react-router-dom'
import { truncate, useGlobalState } from '../store'
import Messages from '../components/Messages'

const Chat = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className="flex justify-center items-center w-full flex-col flex-wrap p-6 sm:w-3/4 mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center space-x-2">
          <Identicon
            className="rounded-full shadow-md"
            string={connectedAccount}
            size={25}
          />
          <small className="text-sm font-bold">
            {truncate(connectedAccount, 4, 4, 11)}
          </small>
        </div>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-gray-800 text-white border-gray-600 font-medium text-xs 
            leading-tight uppercase shadow-md hover:bg-transparent hover:shadow-lg hover:text-gray-700
            focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 border
            active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out rounded-full"
          onClick={() => navigate(`/projects/` + id)}
        >
          Back to Project
        </button>
      </div>
      <Messages gid={`pid_${id}`} />
    </div>
  )
}

export default Chat
