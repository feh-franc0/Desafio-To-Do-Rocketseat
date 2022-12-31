import styles from './NewTask.module.css'
import iconAddTask from '../assets/iconAdd.svg'
import { useState } from 'react';

export function NewTask({onAddTask}) {
  const [text, setText] = useState('')

  function handleTextChange(e) {
    e.preventDefault();
    const data = {
      text: text,
      id: Math.random().toString().substring(2),
    }
    console.log(data)
    onAddTask(data)
  }

  return (
      <form action="" className={styles.containerTask} onSubmit={handleTextChange}>
        <textarea 
          className={styles.inputTask} 
          type="text" 
          placeholder="Deixe um comentário" 
          value={text} 
          onChange={e => setText(e.target.value)} 
        />

        <button className={styles.buttonTask} type="submit">
          <span>Criar</span>
          <img src={iconAddTask} alt="add icon" />
        </button>
      </form>
  );
}