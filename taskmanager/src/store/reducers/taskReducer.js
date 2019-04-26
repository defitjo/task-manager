const initState = {}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TASK_CREATED':
      return state;
    case 'TASK_NOT_CREATED':
      return state;
    default:
      return state;
  }
};

export default taskReducer;
