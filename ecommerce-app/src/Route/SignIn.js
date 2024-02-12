import React, { useContext } from 'react';
import {useDispatch} from "react-redux"
import {signInWithGooglePopup,createUserDocumentFromAuth} from ".././Firebase/Firebase.utils"
import SignIncomponent from '../Components/Sign-In_Component/SignIncomponent';
import Button from '../Button-type/Button';
import "../Components/Sign-In_Component/SignInComponent.css"
import Authentication from '../Components/Authentication/Authentication';
import "../Components/Sign-In_Component/SignInComponent.css"
import {googleSignInStart} from "../store/user/user.action"
const SignIn = () => {
const dispatch = useDispatch()


  const logGoogleUser = async()=>{
dispatch(googleSignInStart())
  }

  return (
    <div className='setauthentication'>
    <div>
     <Authentication />
     <div className='buttonofsignin'><Button className='google' Name = "Sign In Google" onClick = {logGoogleUser}/></div>
     </div>
      <SignIncomponent />
      </div>
  )
}

export default SignIn
