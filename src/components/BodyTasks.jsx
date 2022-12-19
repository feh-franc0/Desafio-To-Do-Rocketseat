import styles from './BodyTasks.module.css';
import layer from '../assets/Layer.svg'

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

      {/*Empty  */}
      {/* <div className={styles.emptyTasks}>
        <div className={styles.imgClipBoard}></div>
        <div className={styles.textAboutEmpty}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div> */}
      

      {/*WithTask  */}
      <div className={styles.task}>
        <div className={styles.container}>
          <div className={styles.round}>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
          </div>
        </div>
        <p className={styles.textOfTask}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer lb.</p>
        <div className={styles.deleteTask}>
            <img src={layer} alt="" />
        </div>
      </div>

      
      <div className={styles.task}>
        <div className={styles.container}>
          <div className={styles.round}>
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1"></label>
          </div>
        </div>
        <p className={styles.textOfTask}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer lb.</p>
        <div className={styles.deleteTask}>
            <img src={layer} alt="" />
        </div>
      </div>


    </div>
  );
}