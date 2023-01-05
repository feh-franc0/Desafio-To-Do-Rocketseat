import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { BodyTasks } from './components/BodyTasks';

import './global.css'
import { useState } from 'react';

export function App() {
  const [taks, setTasks] = useState([])

  function handleSaveTasks(newTask) {
    let newList = [...taks]
    newList.push(newTask)
    setTasks(newList)
  }

  function handleDeleteTasks(newTask) {
    setTasks(newTask)
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={handleSaveTasks} />
      <BodyTasks listTasks={taks} deleteTaks={handleDeleteTasks} />
    </>
  )
}
