import icons from '../../../../assets/icons';
import styles from './Header.module.scss';

function Header() {
   return (
      <header className={styles.wrapper}>
         <div className={styles.inner}>
            <img className={styles.logoImage} src={icons.logo} alt="Tictoc" />
            <div className={styles.search}>
                <input type='text' placeholder='Search for accounts and videos' />
                <button className={styles.clearButton}>
                  <img className={styles.clearIcon} src={icons.close} alt="Close" />

                </button>
                <button className={styles.searchButton}>
                   <img className={styles.searchIcon} src={icons.search} alt="Close" />
                </button>
            </div>
            <div className={styles.actions}>

            </div>
         </div>
      </header>
   );
}

export default Header;
