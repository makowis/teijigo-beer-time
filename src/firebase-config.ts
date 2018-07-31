import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  databaseURL: "https://teijigo-beer-time.firebaseio.com",
};

firebase.initializeApp(config);

// Get a reference to the database service
export default firebase.database();