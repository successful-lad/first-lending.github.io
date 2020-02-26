import React from "react";
import {Link} from 'react-router-dom';
import logoIcon from '../../assets/img/logo.svg';
import menuIcon from '../../assets/img/menu-icon.svg'

import './style.scss';

const HeaderMenu = () => (
  <div className='headerMenu'>
    <div className='headerMenu__logo'>
      <img src={logoIcon} alt="logo"/>
      APP-KIT
    </div>
    <nav className='headerMenu__menu'>
      <Link className='headerMenu__menu__item'>About</Link>
      <Link className='headerMenu__menu__item'>Testimonials</Link>
      <Link className='headerMenu__menu__item'>Features</Link>
      <Link className='headerMenu__menu__item'>Team</Link>
      <Link className='headerMenu__menu__item'>Pricing</Link>
      <Link className='headerMenu__menu__item'>Contact</Link>

      <div
        className='headerMenu__menu__burgerMenu'
        onClick={()=>{alert('itsWork')}}
      >
        <img
          src={menuIcon}
          alt="burger menu"
        />
      </div>
    </nav>

  </div>
);

export default HeaderMenu;