import { combineReducers } from 'redux'
import { chequeReducer } from './cheques'

export const rootReducer = combineReducers({
   cheques: chequeReducer,
})
