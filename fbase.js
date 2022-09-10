import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyClpBZPH1FCtocLnI4EXMgTpJiLFsDvFuo",
    authDomain: "disneyclone-next.firebaseapp.com",
    projectId: "disneyclone-next",
    storageBucket: "disneyclone-next.appspot.com",
    messagingSenderId: "832230123356",
    appId: "1:832230123356:web:c18cf944d8b4ea2b35c399"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = app.getFirestore()
const storage = db.getStorage()
console.log(db)
export { app, db, storage }