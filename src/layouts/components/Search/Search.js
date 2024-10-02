import Tippy from '@tippyjs/react/headless';
import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '../../../components/Popper/index';
import styles from './Search.module.scss';
import { ClearIcon, LoadingIcon, SearchIcon } from '../../../components/Icons/index';
import { useDebounce } from '../../../hooks';

import * as searchServices from '../../../services/searchService';
import { useEffect, useRef, useState } from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (debounceValue) {
            // Check the debounceValue value instead
            setLoading(true);

            const fetchAPI = async () => {
                if (debounceValue) {
                    setLoading(true);
                    const result = await searchServices.search(debounceValue);
                    setSearchResults(result);
                    setLoading(false);
                } else {
                    setSearchResults([]);
                    setLoading(false);
                }
            };

            fetchAPI();
        } else {
            setSearchResults([]);
            setLoading(false);
        }
    }, [debounceValue]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResults([]);
        setSearchValue('');
        setLoading(false);
    };

    const handleHideResults = () => {
        setShowResult(false);
    };

    const handleInputChange = (e) => {
        const searchInput = e.target.value;
        if (!searchInput.startsWith(' ') || searchInput.trim()) {
            // searchInput = searchInput.trim();
            setSearchValue(searchInput);
        }
    };

    return (
        <div>
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
                        onChange={handleInputChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && (
                        <button className={styles.clearButton} onClick={handleClear}>
                            <ClearIcon width="18px" />
                        </button>
                    )}
                    {loading && !searchValue && <LoadingIcon width="14px" className={styles.loadingIcon} />}

                    <button className={styles.searchButton} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width="24px" />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
