import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';



function Header() {
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

const[{basket,user}, dispatch] = useStateValue();
  return (
    <div className='header'>
        
        <Link to='/'>
        <img className="header_logo"src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
     
        <div className="header_search">
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">
           
            <div className="header_option">
                <span className='header_optionLineOne'>Hello{!user ? ', customer' :', ' + user.email}</span>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_optionLineOneFirst'>
                <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
            </div>
           
            <div className="header_option">
                <span className='header_optionLineOne'>Returns</span>
                <Link to='/Orders'>
                <div className='header_optionLineOneFirst'>
                <span className='header_optionLineTwo'>& Orders</span>
                </div>
                </Link>
            </div>
            <div className="header_option">
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            
            <Link to='checkout'>
            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
  
}

export default Header
