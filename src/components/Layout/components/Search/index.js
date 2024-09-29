import Tippy from '@tippyjs/react/headless';
import icons from '../../../../assets/icons';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { ClearIcon, SearchIcon } from '../../../Icons/index';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef();
    const handleClear = () => {
        inputRef.current.focus();
        setSearchResults([])
        setSearchValue('');
    };
    
    const handleHideResults = () => {
        setShowResult(false)
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResults(['Gulikit KK3 Max', '8bitdo Ultimate Controller for Xbox'])
        }, 3000)
    }, [])

    return (
        <Tippy
            interactive={true} // Allow interaction with the dropdown
            appendTo={document.body} // This ensures it is appended to the body
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={styles.searchItems}>
                            {searchResults.map((result, index) => (
                                <h6 key={index} className={styles.searchItem}>
                                    {result}
                                </h6>
                            ))}
                        </div>

                        <div>
                            <h5 className={styles.searchTitle}>Accounts</h5>
                        </div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={styles.search}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search for accounts and videos"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && (
                    <button className={styles.clearButton} onClick={handleClear}>
                        <ClearIcon width="18px" />
                    </button>
                )}

                <button className={styles.searchButton}>
                    <SearchIcon width="24px" />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
