const initState = {
  authError: null
}

const authenticationReducer = (state = initState, action) => {
  switch(action.type) {
    case 'JOIN_SUCCESSFULLY':
      console.log('join successfully')
      return {
        ...state,
        authError: null
      }
    case 'ERROR_JOINING':
      console.log('join error')
      return {
        ...state,
        authError: action.error.message
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
