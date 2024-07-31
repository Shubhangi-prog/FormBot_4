import React from 'react';
import styles from '../../assets/lander/Comparer.module.css';
import cstyles from '../../assets/Chatbox.module.css';

function Comparer() {
    return (
        <section className={styles.formCompare}>
            <h1>Replace your old school forms with chatbots</h1>
            <p>Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by 3 your conversion rate compared to classical forms.</p>
            <div className={styles.types}>
                <div className={styles.oldForm}>
                    <img className={styles.icon} src="/icons/times.png" alt="cross icon" />
                    <form>
                        <div className={styles.inputs}>
                            <label htmlFor="name">Full name <span>*</span></label>
                            <input type="text" id="name" placeholder="Full name" />
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="text" id="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="services">What services are you interested in? <span>*</span></label>
                            <div className={styles.inputCheck}>
                                <input type="checkbox" value="" id="websiteDev" />
                                <label htmlFor="websiteDev">Website Dev</label>
                            </div>
                            <div className={styles.inputCheck}>
                                <input type="checkbox" value="" id="contentMarketing" />
                                <label htmlFor="contentMarketing">Content Marketing</label>
                            </div>
                            <div className={styles.inputCheck}>
                                <input type="checkbox" value="" id="socialMedia" />
                                <label htmlFor="socialMedia">Social Media</label>
                            </div>
                            <div className={styles.inputCheck}>
                                <input type="checkbox" value="" id="UIDesign" />
                                <label htmlFor="UIDesign">UX/UI Design</label>
                            </div>
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="additionalInfo">Additional Information <span>*</span></label>
                            <textarea name="additionalInfo" rows={3} id="additionalInfo" placeholder="Additional Information"></textarea>
                        </div>
                        <button type="button">Submit</button>
                    </form>
                </div>
                <div className={styles.newForm}>
                    <img className={styles.icon} src="/icons/tick.png" alt="tick icon" />
                    <div className={styles.tryit}>
                        <span>Try it out!</span>
                        <img src="/images/vectors/arrow-bend.png" alt="arrow-bend icon" />
                    </div>
                    <div className={`${styles.chatbox} ${cstyles.chatbox}`}>
                        <div className={`${styles.admin} ${cstyles.admin}`}>
                            <img className={cstyles.chatHead} src="/images/chat-head-admin.png" alt="admin chat-head" />
                            <div className={cstyles.chat}>
                                <span>Welcome to <b>AA</b> (Awesome Agency)</span>
                                <span><img src="/images/welcome-chat.png" alt="greetings image" /></span>
                            </div>
                        </div>
                        <div className={cstyles.user}>
                            <div className={cstyles.chat}>
                                <button className={cstyles.click}>Hi!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparer