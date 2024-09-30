import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    disable,
    primary,
    outline,
    text,
    rounded,
    small,
    medium,
    large,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button'; // 'button' instead of 'Button' for correct HTML semantics

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when Button is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = classNames(
        styles.wrapper,
        {
            [styles.primary]: primary,
            [styles.outline]: outline,
            [styles.text]: text,
            [styles.rounded]: rounded,
            [styles.small]: small,
            [styles.medium]: medium,
            [styles.large]: large,
            [styles.disable]: disable,
            // [styles.className]: className,
        },
        className,
    );

    return (
        <Component className={classes} {...props}>
            {leftIcon && <img className={styles.buttonIcon} src={leftIcon} alt="" />}
            <span className={styles.buttonTitle}>{children}</span>
            {rightIcon && <img className={styles.buttonIcon} src={rightIcon} alt="" />}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node,
};

export default Button;
