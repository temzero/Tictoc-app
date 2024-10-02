import styles from './SuggestedAccounts.module.scss';
import icons from '../../assets/icons';

function AccountItem() {
    return (
        <div className={styles.accountItem}>
            <img
                className={styles.avatar}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk92qOx7c5k5fybjVbUkwg6BGW_ptjgID9A&s"
                alt="avatar"
            />
            <div className={styles.itemInfo}>
                <p className={styles.username} >
                    <strong>temzero</strong>
                    <img className={styles.check} src={icons.check} />
                </p>
                <p className={styles.name} >Tem Nguyen</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
