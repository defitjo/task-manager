const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const newAlert = ((alert) => {
  return admin.firestore().collection('alerts').add(alert)
    .then(doc => console.log('new alert', doc));
});

exports.taskCreated = functions.firestore.document('tasks/{taskId}').onCreate(doc => {
  const task = doc.data();
  const alert = {
    user: `${task.userFirstName} ${task.userLastName}`,
    description: 'added a new task',
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return newAlert(alert);
});

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore().collection('users').doc(user.uid).get()
    .then(doc => {
      const newUser = doc.data();
      const alert = {
        user: `${newUser.firstName} ${newUser.lastName}`,
        description: 'signed up',
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return newAlert(alert);
    })
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
