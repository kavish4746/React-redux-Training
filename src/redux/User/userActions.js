import axios from 'axios';

import { FETCH_USERS_FAILURE } from './userTypes'
import { FETCH_USERS_REQUEST } from './userTypes'
import { FETCH_USERS_SUCCESS } from './userTypes'

const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }

export const fetchUser=()=>{
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            // response.data is the users
            const users = response.data
            dispatch(fetchUsersSuccess(users))
          })
          .catch(error => {
            // error.message is the error message
            dispatch(fetchUsersFailure(error.message))
          })
      }
}
  
