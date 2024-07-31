import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { shareFormApi, countFormHitApi, saveFormResponseApi } from "../apis/Form";

import AdminContent from '../components/share/AdminContent';
import UserContent from '../components/share/UserContent';

import cstyles from '../assets/Chatbox.module.css';
import styles from '../assets/Share.module.css';

function Share() {
    const { wid } = useParams();
    const vid = Math.floor(10000 + Math.random() * 90000);
    const startDate = moment().format('MMM DD, hh:mm A');

    const [formData, setFormData] = useState({});
    const [formSequence, setFormSequence] = useState({});
    const [formResponse, setFormResponse] = useState({ vid, startDate });

    const [activeRating, setActiveRating] = useState('');
    const [hitFlag, setHitFlag] = useState(true);
    const [shareBox, setShareBox] = useState([]);
    const [shareBoxIndex, setShareBoxIndex] = useState(0);
    const [disableFlagArr, setDisableFlagArr] = useState([]);

    const fetchFormById = async () => {
        const data = await shareFormApi(wid);
        if (data) {
            setFormData(data); setFormSequence(data.formSequence);

        }
    };

    const getInputValue = (key, value) => {
        setFormResponse((prevData) => ({
            ...prevData, [key]: value
        }));
    };

    const setIsSubmit = async (key, e) => {
        e && e.preventDefault();
        if (!key.includes("Button") && !(key in formResponse)) return;
        await saveFormResponseApi(wid, formResponse);
        console.log(formResponse)

        setDisableFlagArr(prevArray => {
            const newArray = [...prevArray];
            newArray[shareBoxIndex] = true;
            return newArray;
        });

        const n = formSequence.length;
        let idx = shareBoxIndex;
        const newItems = [];

        while (idx + 1 < n) {
            idx += 1;
            newItems.push(formSequence[idx]);
            if (formSequence[idx].data.role === 'user') {
                break;
            }
        }

        setShareBox((prev) => [...prev, ...newItems]);
        setShareBoxIndex(idx);
    };

    useEffect(() => {
        const adminItems = [];
        const n = formSequence.length;
        let idx = -1;

        for (let i = 0; i < n; i++) {
            if (formSequence[i].data.role === 'admin') {
                adminItems.push(formSequence[i]);
            }
            else {
                adminItems.push(formSequence[i]);
                idx = i;
                break;
            }
        }

        const boolArr = new Array(n).fill(false);
        setDisableFlagArr(boolArr);
        setShareBox(adminItems);
        setShareBoxIndex(idx);
    }, [formSequence]);

    useEffect(() => {
        if (wid) fetchFormById();
        const fromHit = async () => {
            if (hitFlag) {
                await countFormHitApi(wid);
                setHitFlag(false)
            }
        }

        fromHit();
    }, []);

    return (
        <section className={styles.shareLayout} style={{ background: formData.formTheme }}>
            {shareBox.length > 0 && (
                <div className={`${styles.chatbox} ${cstyles.chatbox}`}>
                    {shareBox.map((item, index) => (
                        <div key={item.key + index} className={cstyles[item.data.role]}>
                            {item.data.role === 'admin' ? (
                                <>
                                    <img className={cstyles.chatHead} src="/images/chat-head-admin.png" alt="admin chat-head" />
                                    <div className={cstyles.chat}>
                                        <span><AdminContent item={item} /></span>
                                    </div>
                                </>
                            ) : (
                                <div className={cstyles.chat}>
                                    <UserContent
                                        item={item}
                                        index={index}
                                        getInputValue={getInputValue}
                                        setIsSubmit={setIsSubmit}
                                        disableFlagArr={disableFlagArr}
                                        activeRating={activeRating}
                                        setActiveRating={setActiveRating}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Share