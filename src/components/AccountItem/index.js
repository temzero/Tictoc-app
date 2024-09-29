import styles from './AccountItem.module.scss';
import icons from '../../assets/icons';
import avatar from '../../assets/images/khng.png';
import Image from '../Image';
import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={styles.wrapper}>
            <Image className={styles.avatar} alt={data.full_name} src={data.avatar} />
            <div className={styles.info}>
                <p className={styles.name}>
                    <span>{data.full_name}</span>
                    {data.tick && <img className={styles.check} src={icons.check} />}
                </p>
                <span className={styles.username}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
