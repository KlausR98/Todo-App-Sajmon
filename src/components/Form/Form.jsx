import { useState } from 'react';
import styles from './Form.module.css';
import { SecondButton } from '../Button/SecondButton.jsx';

export function Form({ onFormSubmit }) {
    const [inputValue, setInputValue] = useState("");

    return (
        <form className={styles.form} 
            onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit(inputValue);
        }}>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className={styles.input} type='text' /> 
            <SecondButton>Dodaj</SecondButton>
        </form>
    );
}