import styles from './AccountItem.module.scss';
import icons from '../../assets/icons';
import avatar from '../../assets/images/khng.png';

function AccountItem() {
    return ( 
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={avatar} alt='Avatar'/>
            <div className={styles.info}>
                <p className={styles.name}>
                    <span >Nguyễn Trần Nhân</span>
                    <img className={styles.check} src={icons.check}></img>
                </p>
                <span className={styles.username}>nguyentrannhan</span>
            </div>
        </div>
     );
}

export default AccountItem;