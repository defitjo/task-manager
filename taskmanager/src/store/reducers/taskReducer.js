const initState = {}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TASK_CREATED':
      console.log('task created successfully')
      return state;
    case 'TASK_NOT_CREATED':
      console.log('error creating task')
      return state;
    default:
      return state;
  }
};

export default taskReducer;
