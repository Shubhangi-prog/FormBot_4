import React from 'react';
import styles from '../../assets/lander/Result.module.css';
import cstyles from '../../assets/Chatbox.module.css';

function Result() {
    const featureCards = [
        {
            icon: "accessibility.png",
            title: "Hidden fields",
            desc: "Include data in your form URL to segment your user and use its data directly in your form"
        },
        {
            icon: "person-add.png",
            title: "Team collaboration",
            desc: "Invite your teammates to work on your typebots with you"
        },
        {
            icon: "git-branch.png",
            title: "Link to sub typebots",
            desc: "Reuse your typebots in different parent bots"
        },
        {
            icon: "calculator.png",
            title: "Custom code",
            desc: "Customize everything with your own Javascript & CSS code"
        },
        {
            icon: "social-share.png",
            title: "Custom domain",
            desc: "Connect your typebot to the custom URL of your choice"
        },
        {
            icon: "folder-open.png",
            title: "Folder management",
            desc: "Organize your typebots in specific folders to keep it clean and work with multiple clients"
        }
    ];

    const brandImages = [
        "ibanfirst", "lemlist", "makerlead", "webisharp", "socialhackrs", "pinpoint", "obole", "awwwsome"
    ];

    return (
        <section className={styles.result}>
            <h1>Collect results in real-time</h1>
            <p>One of the main advantage of a chat application is that you collect the user's responses on each question.
                <br /><b>You won't lose any valuable data.</b></p>
            <div className={`${styles.chatbox} ${cstyles.chatbox}`}>
                <div className={`${styles.admin} ${cstyles.admin}`}>
                    <img className={cstyles.chatHead} src="/images/chat-head-admin.png" alt="admin chat-head" />
                    <div className={cstyles.chat}>
                        <span>As you answer this chat, you'll see your result in the real Airtable spreadsheet</span>
                        <span>You can think of it as a guestbook 😂</span>
                        <span>Ready?</span>
                    </div>
                </div>
                <div className={cstyles.user}>
                    <div className={cstyles.chat}>
                        <button className={cstyles.click}>Yeah!</button>
                    </div>
                </div>
            </div>
            <div className={styles.features}>
                <h3>And many more features</h3>
                <p>Typebot makes form building easy and comes with powerful features</p>
                <div className={styles.cards}>
                    {featureCards.map((feature, index) => (
                        <div className={styles.card} key={index}>
                            <img className={styles.icon} src={`/icons/${feature.icon}`} alt="features icon" />
                            <div className={styles.title}>{feature.title}</div>
                            <div className={styles.desc}>{feature.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.brands}>
                <h3>Loved by teams and creators from all around the world</h3>
                <div className={styles.brand}>
                    {brandImages.map((image, index) => (
                        <img src={`/images/brands/${image}.png`} alt={image} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Result