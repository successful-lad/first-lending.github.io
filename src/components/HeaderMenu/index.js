import React, {useState} from "react";
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import logoIcon from '../../assets/img/logo.svg';
import menuIcon from '../../assets/img/menu-icon.svg'

import './style.scss';

const HeaderMenu = () =>{

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuClasses = classNames({
    'headerMenu__menu': true,
    'headerMenu__menu_side' : menuIsOpen,
  });

  const menuItemClasses = classNames({
    'headerMenu__menu__item': true,
    'headerMenu__menu_side__item': menuIsOpen,
  });

  console.log(menuIsOpen);

  return(
    <div className='headerMenu'>
      <div className='headerMenu__logo'>
        <img src={logoIcon} alt="logo"/>
        APP-KIT
      </div>
      <nav className={menuClasses}>
        <Link to={'/'} className={menuItemClasses}>About</Link>
        <Link to={'/'} className={menuItemClasses}>Testimonials</Link>
        <Link to={'/'} className={menuItemClasses}>Features</Link>
        <Link to={'/'} className={menuItemClasses}>Team</Link>
        <Link to={'/'} className={menuItemClasses}>Pricing</Link>
        <Link to={'/'} className={menuItemClasses}>Contact</Link>
        <div
          className='headerMenu__menu__burgerMenu'
          onClick={() => setMenuIsOpen(value => !value)}
        >
          <img
            src={menuIcon}
            alt="burger menu"
          />
        </div>
      </nav>

    </div>
  );
};

export default HeaderMenu;