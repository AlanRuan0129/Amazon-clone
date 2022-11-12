import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_box'>
                <div className='box'>
                    <h2 className='heading'>Get to Know Us</h2>
                    <div className='footer_content'>
                    <p>Careers</p>
                    <p>Amazon and Our Planet</p>
                    <p>Investor Relations</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='heading'>Make Money with Us</h2>
                    <div className='footer_content'>
                    <p>Sell on Amazon</p>
                    <p>Supply to Amazon</p>
                    <p>Amazon Associates</p>
                    <p>Sell on Amazon Handmade</p>
                    <p>Advertise Your Products</p>
                    <p>Independently Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='heading'>Amazon Payment Products</h2>
                    <div className='footer_content'>
                    <p>Amazon.ca Rewards Mastercard</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                    <p>Gift Cards</p>
                    <p>Amazon Cash</p>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='heading'>Let Us Help You</h2>
                    <div className='footer_content'>
                    <p>COVID-19 and Amazon</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Amazon Prime</p>
                    <p>Returns Are Easy</p>
                    <p>Manage your</p>
                    <p>Content and Devices</p>
                    <p>Customer Service</p>
                    </div>
                </div>

                
            </div>
            <div className='logo'>
                <img className="header_logo"src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
