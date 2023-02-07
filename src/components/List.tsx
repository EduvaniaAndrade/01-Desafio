import styles from './List.module.css'
import { FaFileAlt } from 'react-icons/fa'
import { Task } from './Task'
import { useMemo } from 'react'

type Done = {
  id: string
  isDone: boolean
}

type Tasks = {
  id: string
  task: string
  isDone: boolean
}
type Props = {
  tasks: Tasks[]
  onDeleteTask: (id: string) => void
  onComplete: (params: Done) => void
}

export function List({ tasks, onDeleteTask, onComplete }: Props) {
  const doneQuantity = useMemo(() => {
    const doneTasks = tasks.filter((task) => task.isDone)

    return doneTasks.length
  }, [tasks])

  return (
    <div className={styles.list}>
      <div className={styles.listInfo}>
        <div className={styles.createdTasks}>
          <label>Tarefas criadas</label>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          <label>Concluidas</label>
          <span>
            {doneQuantity} de {tasks.length}
          </span>
        </div>
      </div>

      {tasks?.length === 0 && (
        <div className={styles.emptyList}>
          <FaFileAlt />
          <p>
            Você ainda não tem tarefas cadastradas
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      )}

      <div className={styles.listContainer}>
        {tasks.map((myTask) => {
          return (
            <Task
              key={myTask.id}
              id={myTask.id}
              taskContent={myTask.task}
              onDeleteTask={onDeleteTask}
              onComplete={onComplete}
            />
          )
        })}
      </div>
    </div>
  )
}
