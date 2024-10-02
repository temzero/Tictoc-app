import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames';

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => classNames(styles.menuItem, { [styles.active]: nav.isActive })} to="/">
            <span className={styles.icon}>{icon}</span>
            <span className={styles.title}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
