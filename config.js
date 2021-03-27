import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAE73swI2jk8psjkMObbQUYMhdCX7ekfTI",
    authDomain: "story-hub-c2715.firebaseapp.com",
    projectId: "story-hub-c2715",
    storageBucket: "story-hub-c2715.appspot.com",
    messagingSenderId: "914935088478",
    appId: "1:914935088478:web:2cb3a04aa1304615b4bbcf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();