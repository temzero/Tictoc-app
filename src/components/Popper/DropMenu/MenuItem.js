import Button from '../../Button';
import styles from './DropMenu.module.scss'

function MenuItem({ data }) {
   console.log('Title: ', data.title || 'No title available');
   return (
    <Button className={styles.item} leftIcon={data.icon} to={data.to}>
        {data.title}
    </Button>
    );
}

export default MenuItem;
