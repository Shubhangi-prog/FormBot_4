import React from 'react';
import styles from '../../assets/Workspace.module.css';

function FormBox({ button, index, handleRemoveBox, getFormBoxValue, formBoxError }) {
    const { role, src, type, hint, value } = button.data;

    return (
        <div key={index} className={styles.card}>
            <div className={styles.remove} onClick={() => handleRemoveBox(index)} >
                <img src="/icons/delete.png" alt="trash icon" />
            </div>
            <span className={styles.title}>{`${role === "user" ? 'Input ' : ''}${type} ${button.key.split(":")[1]}`}</span>
            <div className={styles.inputBox}>
                {role === "admin" ? (
                    <div>
                        <img src={`/icons/${src}`} alt={`${type} icon`} />
                        <input type="text" id={`fval-${index}`} value={value} className={formBoxError[index] ? "error" : ""} onChange={(e) => getFormBoxValue(index, e.target.value)} placeholder={hint} autoComplete="off" />
                        {formBoxError[index] && <label htmlFor={`fval-${index}`} className="error">{formBoxError[index]}</label>}
                    </div>
                ) : (
                    type === "Button" ? (
                        <div>
                            <input type="text" id={`fval-${index}`} value={value} className={formBoxError[index] ? "error" : ""} onChange={(e) => getFormBoxValue(index, e.target.value)} placeholder={hint} autoComplete="off" />
                            {formBoxError[index] && <label htmlFor={`fval-${index}`} className="error">{formBoxError[index]}</label>}
                        </div>
                    ) : (
                        <span className={styles.hintText}>Hint: User will {hint}</span>
                    )
                )}
            </div>
        </div>
    );
}

export default FormBox