import styles from './BodyTasks.module.css';

export function BodyTasks() {
  return (
    <div className={styles.contantBodyTasks}>

      <div className={styles.infoAboutTask}>

        <div className={styles.contantTasksCreated}>
          <p className={styles.tasksCreatedText}>Tarefas criadas</p>
          <div className={styles.tasksCreatedCount}>
            <span>0</span>
          </div>
        </div>

        <div className={styles.contantTasksDone}>
          <p className={styles.tasksDoneText}>Concluídas</p>
          <div className={styles.tasksDonecount}>
            <span>0</span>
          </div>
        </div>  

      </div>

      <div className={styles.emptyTasks}>
        <div className={styles.imgClipBoard}></div>
        <div className={styles.textAboutEmpty}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>

    </div>
  );
}