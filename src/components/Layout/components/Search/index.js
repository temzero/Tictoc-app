import Tippy from '@tippyjs/react/headless';
import icons from '../../../../assets/icons';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper/index';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { ClearIcon, LoadingIcon, SearchIcon } from '../../../Icons/index';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        
        if(searchValue.trim()) {
            
            setLoading(true)
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then((res) => res.json())
                .then((res) => {
                    // res.data.map(x => setSearchResults(x))
                    // console.log('res.data.length :', res.data.length);
                    setSearchResults(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error)
                    setLoading(false)
                });
        } else {
            setSearchResults([])
            setLoading(false)
        }
    }, [searchValue]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResults([]);
        setSearchValue('');
        setLoading(false)
    };

    const handleHideResults = () => {
        setShowResult(false);
    };

    return (
        <Tippy
            interactive={true}
            appendTo={document.body}
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div>
                            <h5 className={styles.searchTitle}>Accounts</h5>
                        </div>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                {loading && !searchValue && <LoadingIcon width='14px' className={styles.loadingIcon} />}


                <button className={styles.searchButton}>
                    <SearchIcon width="24px" />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
