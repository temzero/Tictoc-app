import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Img({ src, alt, className, fallback: inputFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const imageSrc = src || inputFallback;
    console.log('Fallback image: ', images.noImage)
    
    const handleError = () => {
        console.log('Load image fale, showing No image: ', images.noImage)
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
}

export default forwardRef(Img);
