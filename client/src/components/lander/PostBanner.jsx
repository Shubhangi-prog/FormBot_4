import React from 'react';
import { Link } from 'react-router-dom';
import bstyles from '../../assets/lander/Banner.module.css';
import styles from '../../assets/lander/PostBanner.module.css';

function PostBanner() {
    return (
        <section className={`${styles.postBanner} ${bstyles.banner}`}>
            <div className={`${styles.vector} ${bstyles.vector}`}>
                <h3>Improve conversion and user engagement with FormBots</h3>
                <Link to="/register"><button>Create a FormBot</button></Link>
                <span>No trial. Generous <b>free</b> plan.</span>
                <img className={`${styles.triangle} ${bstyles.triangle}`} src="/images/vectors/triangle-single.png" alt="triangle vector" />
                <img className={`${styles.semiCircle} ${bstyles.semiCircle}`} src="/images/vectors/semi-circle.png" alt="semi-circle vector" />
            </div>
        </section>
    );
}

export default PostBanner;