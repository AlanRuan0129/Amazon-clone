import React, {useEffect} from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51M1L9YF2A9SlFaPdTyIN8N9nsY7qXKds3pUklO7yGieooY6pXA1gVp4MzF0oo4y6mVjbUgL6IwqK9LzxauoEes4F00NQ3CCJl2");

function App() { 

 
 

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  return (
    
    <Router>
      <div className="app">
      
        <Routes>
            <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>,<Footer />]} />
            <Route path="/login" element={[<Login />]} />
            <Route path="/orders" element={[<Header />,<Orders />,<Footer />]} />
            <Route path="/register" element={[<Register />]} />
            <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />
            <Route path="/" element={[<Header />, <Home />, <Footer />]} />
           
        </Routes>
       
      </div>
    </Router>
    
  );
}

export default App;
