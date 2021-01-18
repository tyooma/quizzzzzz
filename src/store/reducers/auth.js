import { AUTH_SUCCESS, LOGOUT } from '../actions/actionTypes'

const initState = {
  token: null
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token
      }
    case LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}
