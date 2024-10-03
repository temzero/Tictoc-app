import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

import avatar1 from '../../assets/images/voy.jpg'
import avatar2 from '../../assets/images/khng.png'

function SuggestedAccounts({ label }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>

            <AccountItem avatar={avatar1}/>
            <AccountItem avatar={avatar2}/>
            <AccountItem avatar={avatar1}/>

            <p className={styles.moreButton} >See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
