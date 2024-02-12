import './Components/Category-item.css';
import Navigation from './Navigation/Navigation';
import Home from './Route/Home';
import {Routes,Route} from "react-router-dom"
import SignIn from './Route/SignIn';
import Contact from './Route/Contact';
import Shop from './Route/Shop';
import Checkout from './Route/CheckOut/Checkout';
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { checkUserSession } from './store/user/user.action';

function App() {
const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(checkUserSession())
  //   const unsubscribe = onAuthStateChangedListner((user)=>{
  //      if(user){
  //          createUserDocumentFromAuth(user)
  //      }
  //      dispatch(setCurrent(user))
  //  })
  //  return unsubscribe
   },[])

  return (
   <>
<Routes>
<Route  path = "/" element = { <Navigation />} >
  <Route index element = { <Home />}/>
  <Route  path = "/shop/*" element = { <Shop />}/>
  <Route  path = "/sign-in" element = { <SignIn />}/>
  <Route  path = "/contact" element = { <Contact />}/>
  <Route  path = "/checkout" element = { <Checkout />}/>
  </Route>

 </Routes>
   </>
  );
}

export default App;
