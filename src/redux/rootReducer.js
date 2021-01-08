import { combineReducers } from 'redux'
import icecreamReducer from './Ice-cream/iceCream_Reducers';
import cakeReducer from './Cake/CakeReducer';
import userReducer from './User/userReducers'

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer,
})

export default rootReducer;