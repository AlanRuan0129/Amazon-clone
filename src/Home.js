import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {


  return (
    <div className='home'>
       <img className="home_image" src="/image/home_image.jpg" alt="" />
       <div className='home_row'>
            <Product 
                id="1"
                title="Apple AirPods (2nd Generation)"
                price={168}
                image="https://images-na.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_UL600_SR600,400_.jpg"
                rating={4}
            />
            

            <Product 
                id="2"
                title="2021 Apple iPad (10.2-inch, Wi-Fi, 64GB) - Space Grey (9th Generation)"
                price={429}
                image="https://images-na.ssl-images-amazon.com/images/I/61uZ4l7QVJL._AC_UL600_SR600,400_.jpg"
                rating={5}
            />
            
            
            
       </div>
       <div className='home_row'>
            <Product 
                id="3"
                title="Honeywell HUL520BC MistMate™ Ultrasonic Cool Mist Humidifier, Black, with Adjustable Mist Control"
                price={49.99}
                image="https://images-na.ssl-images-amazon.com/images/I/6109LvqqWmL._AC_UL450_SR450,320_.jpg"
                rating={4}
            />

            <Product 
                id="4"
                title="Tenvoonl Joypad Controller Compatible with Switch Controller Joy-Pads with Grip Hand,Switch Controllers Supports Wake-up Function"
                price={40.79}
                image="https://m.media-amazon.com/images/I/41TPIvDkqWL._AC_UF226,226_FMjpg_.jpg"
                rating={4}
            />
            
            <Product 
                id="5"
                title="ZIYOU LANG K61 60% Gaming Keyboard Mini Portable Rainbow RGB Backlight Compact Ergonomic 62 Keys Layout"
                price={19.19}
                image="https://m.media-amazon.com/images/I/51lAJ3nmNsL._AC_UF226,226_FMjpg_.jpg"
                rating={4}
            />

       </div>
       <div className='home_row'>
            <Product 
                id="6"
                title="TCL 55 Class 6-Series 4K Mini-LED UHD QLED Dolby Vision HDR Smart Google TV - 55R646-CA"
                price={899}
                image="https://m.media-amazon.com/images/I/91Zihsc0coL._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
            />
       </div>
    </div>
  );
}

export default Home;
