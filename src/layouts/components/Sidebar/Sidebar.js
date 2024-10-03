import Menu, {MenuItem} from './Menu'
import styles from './Sidebar.module.scss';
import routes from '../../../config/routes';
import { GroupIcon, HomeIcon, LiveIcon } from '../../../components/Icons/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccounts/SuggestedAccounts';

function Sidebar() {
    return ( <aside className={styles.wrapper}>
        <Menu>
            <MenuItem title="For You" to={routes.home} icon={<HomeIcon/>} />
            <MenuItem title="Following" to={routes.following} icon={<GroupIcon/>} />
            <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon/>} />
        </Menu>
        
        <SuggestedAccounts label='Suggested Accounts' />
        <SuggestedAccounts label='Following' />
        
    </aside> );
}

export default Sidebar;