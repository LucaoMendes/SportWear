import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyD_-pXqm3-AzVn3dqYHqodfzRoa_vZiNhI",
  authDomain: "sportwear-b8b42.firebaseapp.com",
  projectId: "sportwear-b8b42",
  storageBucket: "sportwear-b8b42.appspot.com",
  messagingSenderId: "590232519794",
  appId: "1:590232519794:web:9458209fb090a360b2aeeb",
  measurementId: "G-642HNLG5TM"
}
  // Initialize Firebase
const apps = firebase.apps
var initialized = false
apps.forEach(app => {
  if(app.name == "[DEFAULT]")
    initialized = true
})
if(!initialized){
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ experimentalForceLongPolling: true })
  console.log("[FIREBASE] APP [DEFAULT] Inicializado")
  console.log("[FIREBASE] {FIRESTORE} Inicializado")
}else{
  console.warn("[FIREBASE] APP [DEFAULT] Já foi inicializado")
}
  


const database = firebase.firestore()
export const userAuth = firebase.auth()
export const storage =  firebase.storage()
export default database

  