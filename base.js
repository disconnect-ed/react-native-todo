import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBjxhvi3_YjHuPKWPiuVV3cfQokz-p703E",
    authDomain: "react-native-todo-83266.firebaseapp.com",
    databaseURL: "https://react-native-todo-83266.firebaseio.com",
    projectId: "react-native-todo-83266",
    storageBucket: "react-native-todo-83266.appspot.com",
    messagingSenderId: "288872240057",
    appId: "1:288872240057:web:1706b03f3a241579ec9c68"
});

export default firebaseConfig