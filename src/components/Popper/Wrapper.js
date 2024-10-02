import styles from './Popper.module.scss';
import PropTypes from 'prop-types'  
import classNames from 'classnames';

function Wrapper({ children, className }) {
   return <div className={classNames(styles.wrapper, className)}>{children}</div>;
}

Wrapper.propTypes = {
   children: PropTypes.node.isRequired,
   classNames: PropTypes.string

}

export default Wrapper;
