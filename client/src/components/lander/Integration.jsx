import React from 'react';
import styles from '../../assets/lander/Integration.module.css';

function Integration() {
    const images = [
        "gmail", "mailchimp", "notion", "webflow", "wordpress", "google-calendar", "n8n", "google-drive", "slack", "shopify", "airtable", "google-sheet", "zapier", "calendly", "salesforce"
    ];

    return (
        <div className={styles.integration}>
            <div className={styles.wrapper}>
                {images.map((image, index) => (
                    <div className={styles.images} key={index}>
                        <img src={`/images/integration/${image}.svg`} alt="integration platform" />
                    </div>
                ))}
                <div className={`${styles.overlay} ${styles.overlayLeft}`}></div>
                <div className={`${styles.overlay} ${styles.overlayRight}`}></div>
            </div>
            <div className={styles.desc}>
                <h3>Integrate with any platform</h3>
                <p>Typebot offers several native integrations blocks as well as instructions on how to embed typebot on particular platforms</p>
            </div>
        </div>
    )
}

export default Integration