import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>

            <AccountItem/>
            <AccountItem/>
            <AccountItem/>

            <p className={styles.moreButton} >See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
