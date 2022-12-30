import styles from './BodyTasks.module.css';
import layer from '../assets/Layer.svg'

export function BodyTasks() {
  const posts = [
    {
      id: Math.random().toString().substring(2),
      content: 'Conteúdo do post 1',
      userName: true,
    },
    {
      id: Math.random().toString().substring(2),
      content: 'Conteúdo do post 2',
      userName: false,
    },
    {
      id: Math.random().toString().substring(2),
      content: 'Conteúdo do post 3',
      userName: true,
    },
  ];

  
  const handleChange = (e) => {
    const el = e.target;
    const valueClass = e.target.className;
    const valueId = e.target.id;
    const checked = e.target.checked;
    // console.log(el, checked, valueClass,valueId );

    const elemento = document.getElementsByClassName(valueId)[0]
    console.log(elemento)
    
    if (checked) {
      elemento.style = "text-decoration-line: line-through; color: #808080;"
    } else {
      elemento.style = ""
    }
  }

  return (
    <div className={styles.contantBodyTasks}>

      <div className={styles.infoAboutTask}>

        <div className={styles.contantTasksCreated}>
          <p className={styles.tasksCreatedText}>Tarefas criadas</p>
          <div className={styles.tasksCreatedCount}>
            <span> { posts.length }</span>
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
      {/* um tipo de forma para não exibir um codigo caso n atenda a condição */}
      {posts.length <= 0 ? 
      <div className={styles.emptyTasks}>
        <div className={styles.imgClipBoard}></div>
        <div className={styles.textAboutEmpty}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
      : null
      }
      

      {/*WithTask  */}
      {/* Outra forma de exibir um codigo caso a condição seja atendida */}


      {posts.length > 0 && (posts.map((post) => (
        <div className={styles.task} key={post.id}>
          <div className={styles.container}>
            <div className={styles.round}>
              <input type="checkbox" /*checked={post.userName}*/ className={post.content} id={post.id} onChange={handleChange} />
              <label htmlFor={post.id}></label>
            </div>
          </div>
          <p className={styles.textOfTask+" "+post.id}>{post.content}</p>
          <div className={styles.deleteTask}>
            <img src={layer} alt="" />
          </div>
        </div>
      )))}

    </div>
  );
}