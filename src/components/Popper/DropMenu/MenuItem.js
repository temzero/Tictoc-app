import Button from '../../Button';
import styles from './DropMenu.module.scss';
import classNames from 'classnames';

function MenuItem({ data, onClick }) {
    const classes = classNames(styles.item, {
        [styles.separate]: data.separate,  // Ensure `styles.separate` is used for correct scoping.
    });

    console.log('Classes: ', classes);

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
