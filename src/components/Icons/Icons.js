export const MessageIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const UploadIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M15 11L12.087 8.08704V8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704V8.08704L9 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const SearchIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="Interface / Search_Magnifying_Glass">
            <path
                id="Vector"
                d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export const ClearIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
            fill="currentColor"
        />
    </svg>
);

export const LoadingIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 330 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path
                d="M307.5,150h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"
                fill="currentColor"
            />
            <path
                d="M52.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S60.784,150,52.5,150z"
                fill="currentColor"
            />
            <path
                d="M157.5,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60
                    C172.5,246.716,165.784,240,157.5,240z"
                fill="currentColor"
            />
            <path
                d="M157.5,0c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V15
                    C172.5,6.716,165.784,0,157.5,0z"
                fill="currentColor"
            />
            <path
                d="M231.746,218.033c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.427
                    c2.929,2.929,6.767,4.393,10.606,4.393s7.678-1.464,10.607-4.393c5.858-5.858,5.858-15.355,0-21.213L231.746,218.033z"
                fill="currentColor"
            />
            <path
                d="M62.04,48.328c-5.857-5.857-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l42.427,42.426
                    c2.929,2.929,6.768,4.393,10.606,4.393c3.839,0,7.678-1.464,10.607-4.394c5.857-5.858,5.857-15.355,0-21.213L62.04,48.328z"
                fill="currentColor"
            />
            <path
                d="M221.14,116.36c3.838,0,7.678-1.465,10.607-4.393l42.427-42.426c5.858-5.858,5.858-15.355,0-21.213
                    c-5.859-5.858-15.355-5.857-21.213,0l-42.427,42.426c-5.858,5.858-5.858,15.355,0,21.213
                    C213.462,114.896,217.3,116.36,221.14,116.36z"
                fill="currentColor"
            />
        </g>
    </svg>
);
