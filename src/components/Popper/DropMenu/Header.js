import styles from './DropMenu.module.scss';
import icons from '../../../assets/icons/index';
import PropTypes from 'prop-types';

function Header({ title, onBack }) {
    return (
        <header className={styles.header}>
            <button className={styles.backButton} onClick={onBack}>
                <img className={styles.headerBackIcon} src={icons.back} />
                <h4 className={styles.headerTitle}>{title}</h4>
            </button>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
