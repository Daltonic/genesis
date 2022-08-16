import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: 'scale-0',
  connectedAccount: ''
})

export { useGlobalState, setGlobalState, getGlobalState }
