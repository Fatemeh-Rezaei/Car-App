import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car App</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Car App | &copy;</footer>
    </>
  );
}

export default Layout;
