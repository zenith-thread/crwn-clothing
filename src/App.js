import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home/home.page";
import Shop from './pages/Shop/shop.page';
import Navigation from './pages/Navigation/Navigation.component';
import Contact from './pages/contact/contact.page';
import SignIn from './pages/SignIn/SignIn.component';
import Checkout from './pages/checkout/checkout.page';

const App = () => {
      
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='contact-us' element={<Contact />}/>
        <Route path='sign-in' element={<SignIn />}/>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>       
  );
}

export default App;
