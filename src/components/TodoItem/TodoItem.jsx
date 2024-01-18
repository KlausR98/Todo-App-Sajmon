import styles from './TodoItem.module.css';
import { SecondButton } from '../Button/SecondButton';

export function TodoItem({
    name, 
    done, 
    onDeleteButtonClick, 
    onDoneButtonClick
}) {
    return (
        <li className={styles.item}>
            <span className={`${styles.name} ${done ? styles.done : ""}`}>
                {name}
            </span>
            {!done && <SecondButton onClick={onDoneButtonClick} >Zrobione</SecondButton>}
            <SecondButton onClick={onDeleteButtonClick}>Usuń</SecondButton>
        </li>
    );
}
