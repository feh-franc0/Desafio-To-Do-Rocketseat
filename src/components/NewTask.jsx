import styles from './NewTask.module.css'
import iconAddTask from '../assets/iconAdd.svg'

export function NewTask() {
  return (
    <div className={styles.containerTask}>
      <input className={styles.inputTask} type="text" /*value='Adicione uma nova tarefa'*/ />
      <button className={styles.buttonTask}>
        <span>Criar</span>
        <img src={iconAddTask} alt="add icon" />
      </button>
    </div>
  );
}