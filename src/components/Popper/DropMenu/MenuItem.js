import Button from '../../Button';
import styles from './DropMenu.module.scss'

function MenuItem({ data, onClick }) {
   return (
    <Button className={styles.item} leftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
    </Button>
    );
}

export default MenuItem;
