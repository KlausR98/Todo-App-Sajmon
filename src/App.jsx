import { useState } from 'react';
import styles from './App.module.css'
import { Form } from './components/Form/Form.jsx';
import { TodoItem } from './components/TodoItem/TodoItem.jsx';
import { getNumberOfAllTasks } from './utils/getNumberOfAllTasks.js';

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Zapłacić", done: false, id: 1},
    { name: "Oddać", done: true, id: 2},
  ]);

  return (
    <div className={styles.container__parent}>
      <div className={styles.container}>
      <header className={styles.header}>
        <div>
        <h1>Lista rzeczy do zrobienia:</h1>
        <h2>{getNumberOfAllTasks(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button onClick={() => setIsFormShown(true)} className={styles.button}>
            +
          </button>)}
      </header>
      {isFormShown && (
        <Form 
          onFormSubmit={(newTodoName) => {
            setTodos((prevTodos) => [
              ...prevTodos,
               {
                name: newTodoName,
                done: false,
                id: prevTodos.at(-1).id + 1,
              },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
           key={id}
           name={name}
           done={done}
           onDeleteButtonClick={() => {
            setTodos((prevTodos) =>
              prevTodos.filter((todo) => todo.id !== id)
            );
          }}
          onDoneButtonClick={() => {
            setTodos((prevTodos) => prevTodos.map((todo) => {
              if (todo.id !== id) {
                return todo;
              }
              return {...todo, done: true,};
            }))
          }}
           />
        ))}
      </ul>
      </div>
    </div>
  )
}

export default App
