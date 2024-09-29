import { useEffect, useState } from 'react';
import icons from '../../../../assets/icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import Button from '../../../Button';
import userAvatar from '../../../../assets/images/voy.jpg';
import Img from '../../../Image/index.js';
import images from '../../../../assets/images/index.js';
import Icons from '../../../Icons/index.js';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import DropMenu from '../../../Popper/DropMenu';

const currentUser = true;
const invalidImage = 0;

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
   const [searchResults, setSearchResults] = useState(['Gulikit KK3 Max', '8bitdo Ultimate Controller for Xbox']);

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
            <img className={styles.logoImage} src={icons.logo} alt="Tictoc" />
            <Tippy
               interactive={true} // Allow interaction with the dropdown
               appendTo={document.body} // This ensures it is appended to the body
               visible={searchResults.length > 0}
               render={(attrs) => (
                  <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <div className={styles.searchItems}>
                           {searchResults.map((result, index) => (
                              <h6 key={index} className={styles.searchItem}>{result}</h6>
                           ))}
                        </div>

                        <div><h5 className={styles.searchTitle}>Accounts</h5></div>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>

                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={styles.search}>
                  <input type="text" placeholder="Search for accounts and videos" />

                  <button className={styles.clearButton}>
                     <img className={styles.clearIcon} src={icons.close} alt="Close" />
                  </button>

                  <button className={styles.searchButton}>
                     <img className={styles.searchIcon} src={icons.search} alt="Close" />
                  </button>
               </div>
            </Tippy>

            <div className={styles.actions}>
               {currentUser ? (
                  <>
                     <button className={styles.actionButton} >
                        <Icons.uploadIcon />
                     </button>
                     <button className={styles.actionButton} >
                        <Icons.messageIcon width='24px' />
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
