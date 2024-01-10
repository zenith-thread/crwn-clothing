// REDUX

import { useDispatch } from 'react-redux';

// USER REDUX
import { onAuthObservableListener, createUserDocumentFromGoogleAuth } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action';

import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import Home from "./pages/home/home.page";
import Shop from './pages/Shop/shop.page';
import Navigation from './pages/Navigation/Navigation.component';
import Contact from './pages/contact/contact.page';
import SignIn from './pages/SignIn/SignIn.component';
import Checkout from './pages/checkout/checkout.page';

const App = () => {
    const dispatch = useDispatch()

    // Following useEffect is used for setting User Data to the Redux Store
    // Using UseEffect to unmount onAuthListener after the state is changed to prevent memory leak 
    // and stop it from listening all the time
    useEffect(() => {
      const unsubscribe = onAuthObservableListener((user) => {
        if(user) {
          createUserDocumentFromGoogleAuth(user)
        }
        dispatch(setCurrentUser(user))    //setting the currentUser in the user redux by the authListener
      })
      return unsubscribe;
    }, [])
      
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='contact-us' element={<Contact />}/>
        <Route path='sign-in' element={<SignIn />}/>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>       
  );
}

export default App;
