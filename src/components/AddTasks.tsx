import styles from './AddTasks.module.css'
import { FaPlusCircle } from 'react-icons/fa'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (value: string) => void
}

export function AddTasks({ onAddTask }: Props) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onAddTask(newTaskText)
    setNewTaskText('')
  }

  function hanldeNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <form className={styles.addTasks} onSubmit={handleCreateNewTask}>
      <input
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={hanldeNewTaskChange}
        required
      />
      <button type="submit">
        Criar <FaPlusCircle />
      </button>
    </form>
  )
}
