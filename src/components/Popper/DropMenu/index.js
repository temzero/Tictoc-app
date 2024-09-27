import Tippy from '@tippyjs/react/headless';
import styles from './DropMenu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';

function DropMenu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0,200]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles.menuItems} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default DropMenu;
