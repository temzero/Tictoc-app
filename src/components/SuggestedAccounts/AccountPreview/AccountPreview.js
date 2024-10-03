import styles from './AccountPreivew.module.scss';
import Image from '../../Image/Image';
import Button from '../../Button';
import icons from '../../../assets/icons';

function AccountPreview({ avatar, name, username }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Image src={avatar} className={styles.avatar} />
                <Button primary small className={styles.button}>
                    Follow
                </Button>
            </div>
            <div className={styles.body}>
                <p className={styles.username}>
                    <strong>temzero</strong>
                    <img className={styles.check} src={icons.check} />
                </p>
                <p className={styles.name}>Tem Nguyen</p>
                <div className={styles.analytic}>
                    <strong className={styles.value}>8.2M</strong>
                    <p className={styles.label}>Follower</p>
                    <strong className={styles.value}>10.7M</strong>
                    <p className={styles.label}>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
