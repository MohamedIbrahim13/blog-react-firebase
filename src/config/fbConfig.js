import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLSTQZIoQymddAHopLYiEl-8IddZ1ixhE",
    authDomain: "blog-react-c7311.firebaseapp.com",
    databaseURL: "https://blog-react-c7311.firebaseio.com",
    projectId: "blog-react-c7311",
    storageBucket: "blog-react-c7311.appspot.com",
    messagingSenderId: "720154041555",
    appId: "1:720154041555:web:957e27740d3b21be778826"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase
