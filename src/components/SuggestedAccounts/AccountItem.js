import styles from './SuggestedAccounts.module.scss';
import icons from '../../assets/icons';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '../Popper'
import AccountPreview from './AccountPreview';
import Image from '../Image/Image';

function AccountItem({avatar}) {
    const renderPreview = (props) => {
        return (
            <div className={styles.preview} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div >
                        <AccountPreview avatar={avatar}/>
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy interactive delay={[500, 0]} offset={[4, 0]} placement='bottom' render={renderPreview}>
                <div className={styles.accountItem}>
                    <Image
                        className={styles.avatar}
                        src={avatar}
                        alt="avatar"
                    />
                    <div className={styles.itemInfo}>
                        <p className={styles.username}>
                            <strong>temzero</strong>
                            <img className={styles.check} src={icons.check} />
                        </p>
                        <p className={styles.name}>Tem Nguyen</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
