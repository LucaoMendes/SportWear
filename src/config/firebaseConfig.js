import firebase from "firebase"
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD_-pXqm3-AzVn3dqYHqodfzRoa_vZiNhI",
  authDomain: "sportwear-b8b42.firebaseapp.com",
  projectId: "sportwear-b8b42",
  storageBucket: "sportwear-b8b42.appspot.com",
  messagingSenderId: "590232519794",
  appId: "1:590232519794:web:9458209fb090a360b2aeeb",
  measurementId: "G-642HNLG5TM"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ experimentalForceLongPolling: true })

const database = firebase.firestore()
export const userAuth = firebase.auth()
export default database

  