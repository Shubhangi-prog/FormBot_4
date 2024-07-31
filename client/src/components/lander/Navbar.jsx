import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/lander/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" height={35} alt="logo" />
        FormBot
      </div>
      <div className={styles.action}>
        <Link to="/login"><button className={styles.btnLogin}>Sign in</button></Link>
        <Link to="/register"><button>Create a FormBot</button></Link>
      </div>
    </nav>
  )
}

export default Navbar