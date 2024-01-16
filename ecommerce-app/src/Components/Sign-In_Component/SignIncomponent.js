import React, { useContext, useState } from 'react'
import {CreateAuthUserWithEmailandPassowrd,createUserDocumentFromAuth} from "../../Firebase/Firebase.utils"
import FormInput from '../Form-Input/FormInput'
import Button from '../../Button-type/Button';
import "./SignInComponent.css"

const FormInputFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignIncomponent = () => {

    const [formDetails, setFormDetails] = useState(FormInputFields)
    const { displayName, email, password, confirmPassword } = formDetails;


    const handleChange = (event)=>{
const {name,value} = event.target;
setFormDetails({...formDetails,[name]:value})
    }
  const clearFormInput = ()=>{
    setFormDetails(FormInputFields)
  }
const handleSubmit  = async(event)=>{
event.preventDefault();
if(password!==confirmPassword){
    alert("Passowrd do not match")
    return;
}
try{
const {user} =  await CreateAuthUserWithEmailandPassowrd(email,password);
// console.log(response)

await createUserDocumentFromAuth(user,{displayName})
clearFormInput();
}catch(error){
    if(error.code == "auth/email-already-in-use"){
        alert("email already in use ")
    }else{
        console.log(error)
    }
}
}

    return (
        <>
        <div className='signupcomponent'>
        <h1>Don't Have An Account</h1>
         <h4>Sign Up With Email And Password </h4>
            <div>
                <form onSubmit={(event) =>handleSubmit(event)}>  
               
                <FormInput 
                label = "DisplayName"
                    type="text"
                    value={displayName}
                    onChange={ handleChange}
                    required
                    name="displayName" 
                    autoComplete='off' />
              
                <FormInput 
                         label = "Email"
                    type="email"
                    value={email}
                    onChange={ handleChange}
                    required
                    name="email"
                    autoComplete='off' />
               
                <FormInput  
                         label = "Password"
                    type="password"
                    value={password}
                    onChange={handleChange }
                    required
                    name="password" 
                    autoComplete='off' />
                
                <FormInput 
                         label = "ConfirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange }
                    required
                    name="confirmPassword" 
                    autoComplete='off'  />
                     <Button className="shop"  Name  = "Sign Up"  onClick = {handleSubmit} type="submit"/>
                     </form>
            </div>
           
            </div>
        </>
           )
}
export default SignIncomponent
