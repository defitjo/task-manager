const initState = {
  authError: null
}

const authenticationReducer = (state = initState, action) => {
  switch(action.type) {
    case 'JOIN_SUCCESSFULLY':
      return {
        ...state,
        authError: null
      }
    case 'ERROR_JOINING':
      return {
        ...state,
        authError: action.err.message
      }
    case 'SUCCESSFUL_LOGIN':
      return {
        ...state,
        authError: null
      }
    case 'ERROR_LOGGING_IN':
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'SUCCESSFUL_LOGOUT':
      return state;
    default:
      return state;
  }
}

export default authenticationReducer;
