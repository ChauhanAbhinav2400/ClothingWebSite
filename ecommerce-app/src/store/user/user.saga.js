import {takeLatest,all,call,put} from 'redux-saga/effects';
import {signInFailed,signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess} from "./user.action"
import {USER_ACTION_TYPES} from "./user.types"
import {CreateAuthUserWithEmailandPassowrd, SignAuthUserWithEmailandPassowrd, createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup, signout} from "../../Firebase/Firebase.utils";


export function* getSnapshotFromUserAuth(userAuth,addtionlDetails){
    try{
        
const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,addtionlDetails);
yield put(signInSuccess({id:userSnapshot.id,...userSnapshot}))
// console.log(userSnapshot)
// console.log(userSnapshot.data())
    }catch(error){
yield put(signInFailed(error))
    }
}

 export function* signInWithEmail({payload:{email,password}}){
    try{
const {user} = yield call(SignAuthUserWithEmailandPassowrd,email,password)
yield call(getSnapshotFromUserAuth,user)
    }catch(error){

    }
 }

export function* signWithGoogle(){
  
    try{
        const {user} = yield call(signInWithGooglePopup);
        console.log(user)
        yield call(getSnapshotFromUserAuth,user)
    }catch(error){
yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated(){
   
    try{
const userAuth = yield call(getCurrentUser)
if(!userAuth) return;
yield call(getSnapshotFromUserAuth,userAuth)
    }catch(error){
console.log(error)
    }
}

export function* signUp({payload:{email,password,displayname}}){
try{
 const {user} = yield call(CreateAuthUserWithEmailandPassowrd,email,password)
yield put(signUpSuccess(user,{displayname}))
}catch(error){
yield put(signUpFailed())
}
} 

export function* signOut(){
    try{
yield call(signout());
yield put(signOutSuccess())
    }catch(error){
yield put(signOutFailed(error))
    }
}
export function* signInAfterSignUp({payload:{user,addtionlDetails}}){
yield call(getSnapshotFromUserAuth,user,addtionlDetails)
}

export function* onEmailSignInStart (){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onGoogleSignInStart(){
    
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signWithGoogle)
    
}

export function* onCheckUserSession (){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated)
}

export function*onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onsignOut(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut)
}

export function* userSagas(){
    yield all([call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onsignOut),
    ])
}