import { AddTasks } from './components/AddTasks'
import { Header } from './components/Header'
import { List } from './components/List'
import './global.css'
import { useState } from 'react'

type Tasks = {
  id: string
  task: string
  isDone: boolean
}

type Done = {
  id: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  function handleAddTask(value: string) {
    const newTask: Tasks = {
      id: Math.random().toString(),
      task: value,
      isDone: false,
    }

    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  function handleCompleteTask({ id, isDone }: Done) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <AddTasks onAddTask={handleAddTask} />
      <div className="App">
        <List
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onComplete={handleCompleteTask}
        />
      </div>
    </>
  )
}

export default App
