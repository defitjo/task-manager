export const newTask = (task) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('tasks').add({
      ...task,
      userFirstName: profile.firstName,
      userLastName: profile.lastName,
      userId: userId,
      addedAt: new Date()
    }).then(() => {
      dispatch({ type: 'TASK_CREATED'});
    }).catch(error => {
      dispatch({ type: 'TASK_NOT_CREATED' }, error);
    });
  }
};

