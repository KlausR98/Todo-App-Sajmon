import styles from './SecondButton.module.css';

export function SecondButton({children, onClick}) {
    return (
        <button className={styles.SecondButton} onClick={onClick}>
            {children}
        </button>
    );
}

