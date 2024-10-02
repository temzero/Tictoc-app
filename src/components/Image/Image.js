import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
import propTypes from 'prop-types';  

const Image = forwardRef(({ src, alt, className, fallback: inputFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const imageSrc = src || inputFallback;
    
    const handleError = () => {
        setFallback(inputFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || imageSrc}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    className: propTypes.string,
    fallback: propTypes.string
};

export default Image;
