import { initializeApp} from "firebase/app";// it is used to connect our project to firebase project which i create there.
import {getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth"; // as like initializeApp it is also one of firebase library.
import {getFirestore,
  doc,
  getDoc,
  setDoc,
collection,
writeBatch,
getDocs,
query} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCYXmTRdykSuNNQVvQDC1ES6T-Z5InMHsc",
    authDomain: "abhisat-clothing.firebaseapp.com",
    projectId: "abhisat-clothing",
    storageBucket: "abhisat-clothing.appspot.com",
    messagingSenderId: "260451959170",
    appId: "1:260451959170:web:ccea29a4f7322217cbcf9b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);//firebase has multiple libraries from which initializeApp is one which we need to use in our project because it has functionality to do CRUD in our project.

const provider = new GoogleAuthProvider();// it is a class which has methods .
provider.setCustomParameters({
    prompt:"select_account"
})// this method is used when anybody used to enter first he will get select_account prompt.

export const auth  = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider)

// we can enter with signInWithPopup or signInWithRedirect, provider is set according to method of sign in because it is a class which has several methods but auth is set same in every method of signin.

 export const db = getFirestore();

 export const addCollectionandDocuments = async (collectionKey,objectsToAdd)=>{
const collectionRef = collection(db,collectionKey)
const batch = writeBatch(db)

objectsToAdd.forEach((object)=>{

  const docRef = doc(collectionRef,object.title.toLowerCase())
  batch.set(docRef,object)
})

await batch .commit()
console.log('done')
 }

export const getcategoriesAndDocuments = async()=>{
const collectionRef = collection(db,"categories")
const q = query(collectionRef)
const querysnapshot = await getDocs(q)
return querysnapshot.docs.map(docSnapshot => docSnapshot.data())


// return categoryMap
}


 export const createUserDocumentFromAuth = async (Userauth,additionalinfo)=>{
  if(!Userauth)return ;

    const userDocRef  =  doc(db,"users",Userauth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists())

if(!userSnapshot.exists()){
const {email,displayName} = Userauth;
const createAt = new Date();

await  setDoc(userDocRef,{
  email,
  displayName,
  createAt,
  ...additionalinfo
}) 
}

return userDocRef
}

export const CreateAuthUserWithEmailandPassowrd = async (email,password)=>{
  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth,email,password)
}

 export const  SignAuthUserWithEmailandPassowrd = async (email,password) =>{
  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth,email,password)
 }

export const signout = async () => await  signOut(auth)

export const onAuthStateChangedListner = (callback)=>{
  onAuthStateChanged(auth,callback)
}
