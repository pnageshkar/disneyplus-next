import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { db } from "../../../fbase";
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';

const firebaseConfig = {
  apiKey: 'AIzaSyClpBZPH1FCtocLnI4EXMgTpJiLFsDvFuo',
  authDomain: 'disneyclone-next.firebaseapp.com',
  projectId: 'disneyclone-next',
  storageBucket: 'disneyclone-next.appspot.com',
  messagingSenderId: '832230123356',
  appId: '1:832230123356:web:c18cf944d8b4ea2b35c399',
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const firestore = getFirestore(app);
// const app = !getApps().length
//   ? initializeApp({
//       apiKey: "AIzaSyClpBZPH1FCtocLnI4EXMgTpJiLFsDvFuo",
//       authDomain: "disneyclone-next.firebaseapp.com",
//       projectId: "disneyclone-next",
//       storageBucket: "disneyclone-next.appspot.com",
//       messagingSenderId: "832230123356",
//       appId: "1:832230123356:web:c18cf944d8b4ea2b35c399",
//     })
//   : getApp();
// const firestore = getFirestore(app);

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: FirestoreAdapter(firebaseConfig),
});
