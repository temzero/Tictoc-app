import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'

function DefaultLayout({ children }) {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
     );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;