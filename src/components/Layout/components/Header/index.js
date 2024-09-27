import { useEffect, useState } from 'react';
import icons from '../../../../assets/icons';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import Button from '../../../Button';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import DropMenu from '../../../Popper/DropMenu';

const MENU_ITEMS = [
   {
      icon: icons.language,
      title: 'English',
      to: './language'
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

function Header() {
   const [searchResults, setSearchResults] = useState(['Gulikit KK3 Max', '8bitdo Ultimate Controller for Xbox']);

   // useEffect(() => {
   //    setTimeout(() => {
   //       setSearchResults([...searchResults, 1, 2, 3]);
   //    }, 3000);
   // });

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
               <Button disable text rounded small>Upload</Button>
               <Button outline small >Register</Button>
               <Button primary small >Log in</Button>

               <DropMenu items={MENU_ITEMS}>
                  <button className={styles.moreButton}>
                     <img className={styles.moreIcon} src={icons.more} alt="more" />  
                  </button>
               </DropMenu>
            </div>
         </div>
      </header>
   );
}

export default Header;
