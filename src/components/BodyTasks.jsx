import styles from './BodyTasks.module.css';
import layer from '../assets/Layer.svg'

export function BodyTasks({listTasks, deleteTaks}) {
  // console.log(listTasks)

  const posts = listTasks
  // { id: "1434217519563845", text: 'Conteúdo do post 1', checked: false },
  
  const handleChange = (e) => {
    const valueId = e.target.id;
    const checked = e.target.checked;
    console.log("handleChange: ", checked, valueId);

    console.log(posts.filter((e) => {return e["id"] === valueId }))
    console.log(posts.filter((e) => {return e["id"] !== valueId }))

    const elemento = document.getElementsByClassName("text"+valueId)[0]
    
    if (checked) {
      elemento.style = "color: #808080; text-decoration-line: line-through;"
    } else {
      elemento.style = ""
    }
  }

  const delTask = (e) => {

    const elemento = e.target.parentElement.parentElement.className
    const id = elemento.split(" ")[0]

    function removeItem( value) {
      return posts.filter(function(i) {return i["id"] !== value} );
    }
    var arr2 = removeItem(id)
    // console.log(arr2)
    deleteTaks(arr2)
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

      {/* Empty */}
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
      

      {/* WithTask */}
      {posts.length > 0 && (posts.map((post) => (
        <div className={post.id+" "+styles.task} key={post.id}>
          <div className={styles.container}>
            <div className={styles.round}>
              <input type="checkbox" /*checked={post.userName}*/ className={post.text} id={post.id} onChange={handleChange} /*checked={false}*/ />
              <label htmlFor={post.id}></label>
            </div>
          </div>
          <p className={styles.textOfTask+" "+"text"+post.id}>{post.text}</p>
          <div className={styles.deleteTask} onClick={delTask}>
            <img src={layer} alt="" />
          </div>
        </div>
      )))}

    </div>
  );
}