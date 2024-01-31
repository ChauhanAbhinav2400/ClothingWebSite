import React, { useState,useContext } from 'react'
import {SignAuthUserWithEmailandPassowrd,createUserDocumentFromAuth, signInWithGooglePopup} from "../../Firebase/Firebase.utils"
import FormInput from '../Form-Input/FormInput'
import Button from '../../Button-type/Button'


const FormInputFields = {
   
    email: "",
    password: "",
   
}
const Authentication = () => {

    const [formDetails, setFormDetails] = useState(FormInputFields)
    const {  email, password } = formDetails;



    const handleChange = (event)=>{
const {name,value} = event.target;
setFormDetails({...formDetails,[name]:value})
    }
  const clearFormInput = ()=>{
    setFormDetails(FormInputFields)
  }



const handleSubmit  = async(event)=>{
event.preventDefault();
if(email && password){
}else{
    alert("fill the details")
}
try{
const response  =  await SignAuthUserWithEmailandPassowrd(email,password)
// console.log(response)


clearFormInput();
}catch(error){
    if(error.code == "auth/invalid-credential"){
        alert("invalid-credential ")
    }else if(error.code == "auth/wrong-password"){
alert("wrong-password")
    }else{
        console.log(error)
    }
}

}

    return (
        <>
        <div className='signupcomponent'>
        <h1>I Have An Account</h1>
         <h4>Sign In With Email And Password </h4>
            <div>
                <form onSubmit={(event) =>handleSubmit(event)}>  
               
               
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
        
                     <Button className="shop"  Name  = "Sign In"  onClick = {handleSubmit} type="submit"/>
                     </form>
            </div>
           
            </div>
        </>
           )
}
export default Authentication
