import React from 'react'
import logo from '../images/logo-stackoverflow.svg';
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice';
import { auth } from '../../firebase';


function Header() {

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  
  return (
    <header>
        <div className='header-container'>
            <div className='header-left'>
              <Link to='/'>
                <img src={logo} alt='StackOverflow logo' />
              </Link>
              
              <h3>About</h3>
            </div>
            <div className='header-mid'>
              <div className='search'>
                <SearchIcon />
                <input type='text' placeholder='Search...' />
              </div>
            </div>
            <div className='header-right'>
              <div className='right-container'>
                <span onClick={() => {
                  auth.signOut();
                  navigate('/auth')
                } }>
                  <Avatar src={user?.photo}/>
                  </span>
                <InboxIcon />

              </div>
            </div>
        </div>
    </header>
  )
}

export default Header
