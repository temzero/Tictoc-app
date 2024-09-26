import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'

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

export default DefaultLayout;