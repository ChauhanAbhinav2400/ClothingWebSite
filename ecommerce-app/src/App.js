
import './Components/Category-item.css';
import Navigation from './Navigation/Navigation';
import Home from './Route/Home';
import {Routes,Route} from "react-router-dom"
import SignIn from './Route/SignIn';
import Contact from './Route/Contact';
import Shop from './Route/Shop';
import Checkout from './Route/CheckOut/Checkout';


function App() {
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
