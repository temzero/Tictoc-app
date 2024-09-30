import { useEffect, useState } from 'react';
import icons from '../../../../assets/icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import Button from '../../../Button';
import Img from '../../../Image/index.js';
import images from '../../../../assets/images/index.js';
import {MessageIcon, UploadIcon} from '../../../Icons/index.js';

import routesConfig from '../../../../config/routes.js';
import DropMenu from '../../../Popper/DropMenu';
import Search from '../Search/index.js';
import { Link } from 'react-router-dom';

const currentUser = true;

const MENU_ITEMS = [
   {
      icon: icons.language,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'Language',
               code: 'en',
               title: 'English'
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt'
            },
            {
               type: 'Language',
               code: 'cn',
               title: 'Chinese'
            },
            {
               type: 'Language',
               code: 'jp',
               title: 'Japan'
            },
         ]
      }
   },
   {
      icon: icons.feedback,
      title: 'Feedback & help',
      to: './feedback'
   },
   {
      icon: icons.shortcut,
      title: 'Keyboard shortcut',
      // to: 'shortcut'
   },
];

const userMenu = [
   {
      icon: icons.profile,
      title: 'Profile',
      to: './profile'
   },
   {
      icon: icons.setting,
      title: 'Setting',
      to: './setting'
   },
   ...MENU_ITEMS,
   {
      icon: icons.logout,
      title: 'Logout',
      to: './logout',
      separate: true,
   },
]

function Header() {

   // useEffect(() => {
   //    setTimeout(() => {
   //       setSearchResults([...searchResults, 1, 2, 3]);
   //    }, 3000);
   // });

   const handleDropMenu = (menuItem) => {
      switch(menuItem.type) {
         case 'Language':
            // Handle change language
            break;
         default: 
      }
   }

   return (
      <header className={styles.wrapper}>
         <div className={styles.inner}>
            <Link to={routesConfig.home}><img className={styles.logoImage} src={icons.logo} alt="Tictoc" /></Link>
            
            <Search/>

            <div className={styles.actions}>
               {currentUser ? (
                  <>
                     <button className={styles.actionButton} >
                        <UploadIcon />
                     </button>
                     <button className={styles.actionButton} >
                        <MessageIcon width='24px' />
                     </button>
                  </>
               ): (
                     <>
                        <Button disable text rounded small>Upload</Button>
                        <Button outline small >Register</Button>
                        <Button primary small >Log in</Button>
                     </>
               )}

               <DropMenu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleDropMenu} >
                  {currentUser ? (
                     <Img className={styles.userAvatar} /> // src={userAvatar}
                  ) : (
                     <button className={styles.moreButton}>
                        <img className={styles.moreIcon} src={icons.more} alt="more" />  
                     </button>
                  )}
               </DropMenu>
            </div>
         </div>
      </header>
   );
}

export default Header;
