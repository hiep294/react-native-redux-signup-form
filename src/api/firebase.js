import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC5kimdRBqpZVLqD21P18F4Kssuc-y3Zd8",
  authDomain: "photo-editor-22de1.firebaseapp.com",
  databaseURL: "https://photo-editor-22de1.firebaseio.com",
  projectId: "photo-editor-22de1",
  storageBucket: "photo-editor-22de1.appspot.com",
  messagingSenderId: "491450726311",
  appId: "1:491450726311:web:ba4c9c96aba060a9d96882",
  measurementId: "G-1L10712XVP"
};
// Initialize Firebase
const firebaseApi = firebase.initializeApp(firebaseConfig);
export default firebaseApi
