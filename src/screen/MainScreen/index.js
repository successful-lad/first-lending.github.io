import React from "react";
import {
  HeaderMenu,
  BasicButton,
} from  '../../components'
import imacIcon from '../../assets/img/imac.png'

import './style.scss';

const MainScreen = () => {
  return(
   <div className='mainScreen'>
     <HeaderMenu/>
     <div className='mainScreen__container'>
       <div className='mainScreen__container__info'>
         <div className='mainScreen__container__info__wrapper'>
           <h2>React Lover</h2>
           <div className='mainScreen__container__info__text'>
             App-kit also comes with an React version. It empowers developers to create UI components with very little code. Feeding data into App-kit directives is quick and easy</div>
           <BasicButton text='Find out more'/>
         </div>
       </div>
       <div className='mainScreen__container__screenImg'>
         <img src={imacIcon} alt="imac"/>
       </div>
     </div>
   </div>
  )
};

export default MainScreen;