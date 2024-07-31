import React from 'react';
import styles from '../../assets/lander/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.div}>
                Made with ❤️ by <br />
                <a href="#">@cuvette</a>
            </div>
            <div className={styles.div}>
                <li><a href="#">Status</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">Documentation</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">Roadmap</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">Pricing</a></li>
            </div>
            <div className={styles.div}>
                <li><a href="#">Discord</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">GitHub repository</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">Twitter</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">LinkedIn</a><img className={styles.icon} src="/icons/arrow-square.png" alt="arrow-square icon" /></li>
                <li><a href="#">OSS Friends</a></li>
            </div>
            <div className={styles.div}>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </div>
        </footer>
    )
}

export default Footer