import Button from '../../Button/Button';
import styles from './DropMenu.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function MenuItem({ data, onClick }) {
    const classes = classNames(styles.item, {
        [styles.separate]: data.separate, // Ensure `styles.separate` is used for correct scoping.
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
