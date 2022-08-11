import Identicon from 'react-identicons'
import { useNavigate, useParams } from 'react-router-dom'

const Chat = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div className="flex justify-center items-center w-full flex-col flex-wrap p-6 sm:w-3/4 mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center space-x-2">
          <Identicon
            className="rounded-full shadow-md"
            string={'account'}
            size={25}
          />
          <small className="text-sm font-bold">0x4d...4fc</small>
        </div>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-transparent border-gray-600 text-gray-600 font-medium text-xs 
            leading-tight uppercase shadow-md hover:bg-gray-700 hover:shadow-lg hover:text-white
            focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 border
            active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out rounded-full"
          onClick={() => navigate(`/projects/` + id)}
        >
          Back to Project
        </button>
      </div>
      <div
        id="messages-container"
        className="w-full h-[calc(100vh_-_16rem)] overflow-y-auto sm:px-2 my-3"
      >
        <div className="flex flex-row justify-start my-2">
          <div className="flex justify-center items-end space-x-2">
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-bl-3xl shadow shadow-gray-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@sender</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
            <Identicon
              string={'Sender'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end my-2">
          <div className="flex justify-center items-end space-x-2">
            <Identicon
              string={'@you'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-br-3xl shadow shadow-green-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@you</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start my-2">
          <div className="flex justify-center items-end space-x-2">
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-bl-3xl shadow shadow-gray-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@sender</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
            <Identicon
              string={'Sender'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end my-2">
          <div className="flex justify-center items-end space-x-2">
            <Identicon
              string={'@you'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-br-3xl shadow shadow-green-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@you</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start my-2">
          <div className="flex justify-center items-end space-x-2">
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-bl-3xl shadow shadow-gray-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@sender</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
            <Identicon
              string={'Sender'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end my-2">
          <div className="flex justify-center items-end space-x-2">
            <Identicon
              string={'@you'}
              size={25}
              className="h-10 w-10 object-contain shadow-md rounded-full mr-3"
            />
            <div
              className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-br-3xl shadow shadow-green-500"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <span>@you</span>
                <small>6 min ago</small>
              </div>
              <small className="leading-tight my-2">Message goes here...</small>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-row w-full">
        <input
          className="w-full bg-transparent rounded-lg p-4 
          focus:ring-0 focus:outline-none border-gray-500"
          type="text"
          placeholder="Write a message..."
          required
        />
        <button type="submit" hidden>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
