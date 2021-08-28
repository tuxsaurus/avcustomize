// store.js
// https://github.com/kirill-konshin/next-redux-wrapper

import { createStore } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
//import reducers from './reducers'

// create your reducer
const reducer = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case 'TICK':
      return { ...state, tick: action.payload }
    default:
      return state
  }
}

// create a makeStore function
//const makeStore = (context) => createStore(reducer)

const makeStore = () => {
  // Create store
  const store = createStore(reducer, composeWithDevTools())

  // Return store
  return store
}

// export an assembled wrapper
//export const wrapper = createWrapper(makeStore, { debug: true })
export const wrapper = createWrapper(makeStore, { debug: false })
