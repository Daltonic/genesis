import { CometChat } from '@cometchat-pro/chat'
import { getGlobalState, setGlobalState } from './store'

const CONSTANTS = {
  APP_ID: process.env.REACT_APP_COMET_CHAT_APP_ID,
  REGION: process.env.REACT_APP_COMET_CHAT_REGION,
  Auth_Key: process.env.REACT_APP_COMET_CHAT_AUTH_KEY,
}

const initCometChat = async () => {
  const appID = CONSTANTS.APP_ID
  const region = CONSTANTS.REGION

  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build()

  await CometChat.init(appID, appSetting)
    .then(() => console.log('Initialization completed successfully'))
    .catch((error) => console.log(error))
}

const loginWithCometChat = async () => {
  const authKey = CONSTANTS.Auth_Key
  const UID = getGlobalState('connectedAccount')

  await CometChat.login(UID, authKey)
    .then((user) => setGlobalState('currentUser', user))
    .catch((error) => alert(JSON.stringify(error)))
}

const signInWithCometChat = async () => {
  const authKey = CONSTANTS.Auth_Key
  const UID = getGlobalState('connectedAccount')
  const user = new CometChat.User(UID)

  user.setName(UID)

  await CometChat.createUser(user, authKey)
    .then((user) => console.log('currentUser', user))
    .catch((error) => console.log(error))
}

const logOutWithCometChat = async () => {
  await CometChat.logout()
    .then(() => {
        setGlobalState('currentUser', null)
        console.log('Logged Out Successfully')
    })
    .catch((error) => console.log(error))
}

const checkAuthState = async () => {
  await CometChat.getLoggedinUser()
    .then((user) => setGlobalState('currentUser', user))
    .catch((error) => console.log(error))
}

const createNewGroup = async (GUID, groupName) => {
  const groupType = CometChat.GROUP_TYPE.PUBLIC
  const password = ''
  const group = new CometChat.Group(GUID, groupName, groupType, password)

  await CometChat.createGroup(group)
    .then((group) => setGlobalState('group', group))
    .catch((error) => console.log(error))
}

const getGroup = async (GUID) => {
  await CometChat.getGroup(GUID)
    .then((group) => setGlobalState('group', group))
    .catch((error) => console.log(error))
}

const joinGroup = async (GUID) => {
  const groupType = CometChat.GROUP_TYPE.PUBLIC
  const password = ''

  CometChat.joinGroup(GUID, groupType, password)
    .then((group) => setGlobalState('group', group))
    .catch((error) => console.log(error))
}

const getMessages = async (UID) => {
  const limit = 30
  const messagesRequest = new CometChat.MessagesRequestBuilder()
    .setGUID(UID)
    .setLimit(limit)
    .build()

  await messagesRequest
    .fetchPrevious()
    .then((messages) => setGlobalState('messages', messages))
    .catch((error) => console.log(error))
}

const sendMessage = async (receiverID, messageText) => {
  const receiverType = CometChat.RECEIVER_TYPE.GROUP
  const textMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  )

  await CometChat.sendMessage(textMessage)
    .then((message) => {
        const messages = getGlobalState("messages")
        setGlobalState('messages', messages.push(message))
    })
    .catch((error) => console.log(error))
}

export {
  initCometChat,
  loginWithCometChat,
  signInWithCometChat,
  logOutWithCometChat,
  getMessages,
  sendMessage,
  checkAuthState,
  createNewGroup,
  getGroup,
  joinGroup,
}
