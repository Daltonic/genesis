import { FaTimes } from 'react-icons/fa'
import { loginWithCometChat, signInWithCometChat } from '../CometChat'
import { setGlobalState, useGlobalState } from '../store'

const ChatAuth = ({ project }) => {
  const [chatModal] = useGlobalState('chatModal')
  const [currentUser] = useGlobalState('currentUser')
  const [connectedAccount] = useGlobalState('connectedAccount')

  const handleSignUp = () => {
    signInWithCometChat().then(() => handleLogin())
  }

  const handleLogin = () => {
    loginWithCometChat().then(() => {
      // perform duties...
      if (!!currentUser) console.log('Current user', currentUser)
    })
  }

  const closeModal = () => {
    setGlobalState('chatModal', 'scale-0')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${chatModal}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        {!!!currentUser ? (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-black">Authenticate Chat</p>
              <button
                type="button"
                onClick={closeModal}
                className="border-0 bg-transparent focus:outline-none"
              >
                <FaTimes className="text-black" />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center mt-5">
              <p>Sign in or up to participate in chat.</p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-2 w-full">
              <button
                className=" text-white text-md bg-green-500
              py-2 px-5 rounded-full drop-shadow-xl
              border-transparent border
              hover:bg-transparent hover:text-green-500
              hover:border hover:border-green-500
              focus:outline-none focus:ring mt-5"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className=" text-white text-md bg-green-500
              py-2 px-5 rounded-full drop-shadow-xl
              border-transparent border
              hover:bg-transparent hover:text-green-500
              hover:border hover:border-green-500
              focus:outline-none focus:ring mt-5"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-black">Authenticate Chat</p>
              <button
                type="button"
                onClick={closeModal}
                className="border-0 bg-transparent focus:outline-none"
              >
                <FaTimes className="text-black" />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center mt-5">
              <p>Create or Join chat.</p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-2 w-full">
              {connectedAccount.toLowerCase() != project.owner.toLowerCase() ? (
                <button
                className=" text-white text-md bg-green-500
                py-2 px-5 rounded-full drop-shadow-xl
                border-transparent border
                hover:bg-transparent hover:text-green-500
                hover:border hover:border-green-500
                focus:outline-none focus:ring mt-5"
                >
                  Enter Group
                </button>
              ) : (
                <button
                className=" text-white text-md bg-green-500
                py-2 px-5 rounded-full drop-shadow-xl
                border-transparent border
                hover:bg-transparent hover:text-green-500
                hover:border hover:border-green-500
                focus:outline-none focus:ring mt-5"
                >
                  Create Group
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatAuth
