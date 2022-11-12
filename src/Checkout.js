import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import { Link } from 'react-router-dom';

function Checkout() {

  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user){
        auth.signOut();
    }
  }


  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_img'src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
        <div>
          
          <div className='checkout_header'>
            <h3 className='checkout_account'> {!user ? 'Welcome Sign in to your Account' : 'Welcome, ' + user.email}</h3>
            <Link to={!user ? '/login' : '/'}>
            <div onClick={handleAuthentication}>
              <button className='checkout_SingIn'>{user ? 'Sign Out' : 'Sign In'}</button>
            </div>
            </Link>
            <img className='checkout_img' src='https://m.media-amazon.com/images/G/15/cart/empty/kettle-desaturated._CB424694027_.svg' />  
          </div>
          
          
         <div className='checkout_content'>
         <h2 className='checkout_title'>
            Your shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
            />
          ))}
         </div>
          
        </div>
      </div>

      <div className='checkout_right'>
      <Subtotal />
      </div>
    </div>
  );
}

export default Checkout; 
