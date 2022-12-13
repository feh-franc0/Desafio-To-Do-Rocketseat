import styles from './NewTask.module.css'
import iconAddTask from '../assets/iconAdd.svg'

export function NewTask() {
  return (
      <form action="" className={styles.containerTask}>
        <textarea className={styles.inputTask} type="text" placeholder="Deixe um comentário" />

        <button className={styles.buttonTask} type="submit">
          <span>Criar</span>
          <img src={iconAddTask} alt="add icon" />
        </button>
      </form>
  );
}