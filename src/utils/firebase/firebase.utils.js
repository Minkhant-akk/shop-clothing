import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import{getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDneSoD8kqgU895GgunwJe9c10yHgGYejg",
    authDomain: "crwn-clothings-db-22e75.firebaseapp.com",
    projectId: "crwn-clothings-db-22e75",
    storageBucket: "crwn-clothings-db-22e75.appspot.com",
    messagingSenderId: "752141015686",
    appId: "1:752141015686:web:83932fefcd0a9236be8f07"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,email,createdAt
        })
      }catch(error){
        console.log('error creating the user', error.message);
      }   
 }
 return userDocRef;
    //if user data exists

    //if user data does not exist

    //return usreDocRef

  }

