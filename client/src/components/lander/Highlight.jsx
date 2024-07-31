import React from 'react';
import styles from '../../assets/lander/Highlight.module.css';

function Highlight() {
    return (
        <section className={styles.highlight}>
            <div className={styles.main}>
                <img src="/images/easy-build.png" height={400} alt="easy-build feature" />
                <div className={styles.desc}>
                    <h3>Easy building experience</h3>
                    <p>All you have to do is drag and drop blocks to create your app. Even if you have custom needs, you can always add custom code.</p>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.desc}>
                    <h3>Embed it in a click</h3>
                    <p>Embedding your typebot in your applications is a walk in the park. Typebot gives you several step-by-step platform-specific instructions. Your typebot will always feel "native".</p>
                </div>
                <img src="/images/easy-embed.png" height={400} alt="easy-embed feature" />
            </div>
        </section>
    )
}

export default Highlight