import user from './user'
import account from './account'
import dish from './dishReducer'
import cart from './cartReducer'
import comment from './comment'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	user,
	account,
	dish,
	cart,
	comment
})

export default rootReducer;