import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDtjJPxLo1Z9V3cBQAIHZ5qF3ovlSd8PRY",
    authDomain: "cloths-db-8c416.firebaseapp.com",
    databaseURL: "https://cloths-db-8c416.firebaseio.com",
    projectId: "cloths-db-8c416",
    storageBucket: "cloths-db-8c416.appspot.com",
    messagingSenderId: "341741113916",
    appId: "1:341741113916:web:b0f01ad1ef40a8b940e939"
  };

  firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore=firebase.firestore();


export const CreateUserProfileDocument= async (userAuth,...additionalData)=>{


  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapshot=await userRef.get();

   if(!snapshot.exists){
     const{displayName,email}=userAuth;
     const createdAt=new Date();


     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }
     catch(err)
     {
       console.log('error msessage');
     }
   }


   return userRef;

}

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const Sign_In_With_Google = ()=>auth.signInWithPopup(provider);


export default firebase;


 


