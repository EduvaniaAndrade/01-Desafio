import styles from './Task.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { ChangeEvent } from 'react'

type Done = {
  id: string
  isDone: boolean
}
interface TasksProps {
  taskContent: string
  id: string
  onComplete: (params: Done) => void
  onDeleteTask: (task: string) => void
}

export function Task({
  taskContent,
  onDeleteTask,
  id,
  onComplete,
}: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleComplete(e: ChangeEvent<HTMLInputElement>) {
    const isChecked = e.currentTarget.checked
    onComplete({
      id,
      isDone: isChecked,
    })
  }

  return (
    <div className={styles.taskDetails}>
      <label>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={handleComplete}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p>{taskContent}</p>
      <span className={styles.icon} onClick={handleDeleteTask}>
        <FaTrashAlt />
      </span>
    </div>
  )
}
