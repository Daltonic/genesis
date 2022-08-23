import { useEffect, useState } from 'react'
import { getMessages, sendMessage, CometChat } from '../CometChat'
import { truncate, useGlobalState } from '../store'

const Messages = ({ gid }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
    getMessages(gid).then((msgs) => {
      if (!!!msgs.code)
        setMessages(msgs.filter((msg) => msg.category == 'message'))
    })

    listenForMessage(gid)
  }, [gid])

  const listenForMessage = (listenerID) => {
    CometChat.addMessageListener(
      listenerID,
      new CometChat.MessageListener({
        onTextMessageReceived: (message) => {
          setMessages((prevState) => [...prevState, message])
          scrollToEnd()
        },
      })
    )
  }

  const handleMessage = (e) => {
    e.preventDefault()
    sendMessage(gid, message).then((msg) => {
      if (!!!msg.code) {
        setMessages((prevState) => [...prevState, msg])
        setMessage('')
        scrollToEnd()
      }
    })
  }

  const scrollToEnd = () => {
    const elmnt = document.getElementById('messages-container')
    elmnt.scrollTop = elmnt.scrollHeight
  }

  const dateToTime = (date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    let strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  return (
    <>
      <div
        id="messages-container"
        className="w-full h-[calc(100vh_-_16rem)] overflow-y-auto sm:px-2 my-3"
      >
        {messages.map((msg, i) =>
          msg.sender.uid.toLowerCase() != connectedAccount.toLowerCase() ? (
            <LeftMessage
              key={i}
              message={msg.text}
              timestamp={dateToTime(new Date(msg.sentAt * 1000))}
              owner={truncate(msg.sender.uid, 4, 4, 11)}
            />
          ) : (
            <RightMessage
              key={i}
              message={msg.text}
              timestamp={dateToTime(new Date(msg.sentAt * 1000))}
              owner={truncate(msg.sender.uid, 4, 4, 11)}
            />
          )
        )}
      </div>

      <form onSubmit={handleMessage} className="flex w-full">
        <input
          className="w-full bg-gray-200 rounded-lg p-4 
          focus:ring-0 focus:outline-none border-gray-500"
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" hidden>
          Send
        </button>
      </form>
    </>
  )
}

const RightMessage = ({ message, timestamp, owner }) => (
  <div className="flex flex-row justify-end my-2">
    <div className="flex justify-center items-end space-x-2">
      <div
        className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
    rounded-bl-3xl shadow shadow-green-500"
      >
        <div className="flex flex-row justify-start items-center space-x-2">
          <span>@You</span>
          <small>{timestamp}</small>
        </div>
        <small className="leading-tight my-2">{message}</small>
      </div>
    </div>
  </div>
)

const LeftMessage = ({ message, timestamp, owner }) => (
  <div className="flex flex-row justify-start my-2">
    <div className="flex justify-center items-end space-x-2">
      <div
        className="flex flex-col bg-transparent w-80 p-3 px-5 rounded-t-3xl
          rounded-br-3xl shadow shadow-gray-500"
      >
        <div className="flex flex-row justify-start items-center space-x-2">
          <span>@{owner}</span>
          <small>{timestamp}</small>
        </div>
        <small className="leading-tight my-2">{message}</small>
      </div>
    </div>
  </div>
)

export default Messages
