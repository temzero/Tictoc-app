import Tippy from '@tippyjs/react/headless';
import styles from './DropMenu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const defaultFn = () => {}

function DropMenu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />;
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0,200]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles.menuItems} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}

                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default DropMenu;
