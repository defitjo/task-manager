export const join = (newUser) => {
  // getFirebase = login/sign up new user
  // getFirestore = interact with db
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName
      });
    }).then(() => {
      dispatch({ type: 'JOIN_SUCCESSFULLY' });
    }).catch((error) => {
      dispatch({ type: 'ERROR_JOINING', error });
    });
  }
}

export const login = (info) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      info.email,
      info.password
    ).then(() => {
      dispatch({ type: 'SUCCESSFUL_LOGIN' })
    }).catch((error) => {
      dispatch({ type: 'ERROR_LOGGING_IN', error});
    });
  }
}

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SUCCESSFUL_LOGOUT'})
    });
  }
}
 