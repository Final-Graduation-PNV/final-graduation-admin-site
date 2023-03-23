import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setLoggedIn } from '../../../redux/slices/authSlice';
import { removeShopOnwer, removeToken, removeUserId, removeUserName } from '../../../utils/localStorageUtils';
import { useDispatch } from 'react-redux';
import SideBarItem from './sidebar-item';

import './styles.css';
// import logo from '../../assets/images/white-logo.png';
// import LogoutIcon from '../../assets/icons/logout.svg';

function SideBar({ menu }) {
    const location = useLocation();
  const dispatch = useDispatch()


    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }
    const handleLogout = () => {
        removeToken()
        removeUserName()
        removeShopOnwer()
        removeUserId()
        dispatch(setLoggedIn(false))
      }
    return (
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img
                        src='/image/logomain1.png'
                        alt="logo" />
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <button onClick={handleLogout}>
                        <img
                            src='/icons/logout.svg'
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                        </button>
                        

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;