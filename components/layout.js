import styles from './layout.module.css';

export default function Layout({ children }){ // { children } là tham số cho các components thuộc lớp con.
    return <div className={styles.container}>{ children }</div>;
}