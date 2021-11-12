import { createStore } from 'redux'
import mainReducer from './src/Redux/Reducer/mainReducer'


export default function configureStore() {
  const store = createStore(mainReducer)
  return store
}