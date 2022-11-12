import React,{ useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link,useNavigate} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [thirdName, setThirdName] = useState('');
  const [fourthName, setFourthName] = useState('');
  const [fifthName, setFifthName] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error,setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate ();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])

  console.log('THE SECRET IS: ',clientSecret)

  const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) =>{

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created

        })



      setSucceeded(true);
      setError(null)
      setProcessing(false)

      dispatch({
        tyoe:'EMPTY_BASKET'
      })
      navigate("/orders", { replace: true });


    })
  }
  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.message : "");
  }

  return (
    <div className='payment'>
        <div className='payment_container'>
          <h1 className='payment_link'>
            Checkout(<Link to='/checkout'>{basket?.length} items</Link>) 
          </h1>
            <div className='payment_section'>
              <div className='payment_info'>
                  <div className='payment_title'>
                    <h3>Delivery Address</h3>
                  </div>
                  <div className='payment_address'>
                    <div className='address_title'>
                    <p>Account:</p>
                    <p>Phone number:</p>
                    <p>Street Address:</p>
                    <p>City:</p>
                    <p>Province:</p>
                    <p>Post Code:</p>
                    </div>
                    
                    <div className='address_content'>
                      <p>{user?.email}</p>
                      <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
                      <input value={secondName}   name="secondName" onChange={e => setSecondName(e.target.value)} />
                      <input value={thirdName}   name="thirdName" onChange={e => setThirdName(e.target.value)} />
                      <input value={fourthName}   name="fourthName" onChange={e => setFourthName(e.target.value)} />
                      <input value={fifthName}   name="fifthName" onChange={e => setFifthName(e.target.value)} />
                    </div>

                  </div>
                </div>

            </div>

            <div className='payment_section'>
                  <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                  </div>
                  <div className='payment_items'>
                    {
                      basket.map(item => (
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                        />
                      ))
                    }
                  </div>
            </div>

            <div className='payment_section'>
                  <div className='payment_title'>
                    <h3>Payment Method</h3>
                  </div>
                  <div className='payment_details'>
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange}/>

                          <div className='payment_priceContainer'>
                          <CurrencyFormat 
                            renderText={(value) => (                            
                              <h3>Order Total: {value} </h3>                           
                            )
                            }
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}

                          />

                          <button disabled={processing || disabled || succeeded}>
                              <span>{processing ? <p>Processing</p> : "Submit"}</span>
                          </button>
                          
                          </div>
                          {error && <div>{error}</div>}
                      </form>

                     
                  </div>
            </div>

        </div>
    </div>
  )
}

export default Payment
