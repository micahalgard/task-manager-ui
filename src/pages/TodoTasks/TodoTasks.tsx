import { Page } from '../../components/Page/Page'
import { TaskInput } from '../../components/TaskInput/TaskInput'
import { TaskList } from '../../components/TaskList/TaskList'
import { useTaskManager } from '../../hooks/tasks'

export const TodoTasks = () => {
  const { tasks } = useTaskManager()
  const todoTasks = tasks.filter((t) => !t.isComplete)
  return (
    <Page title="Tasks">
      <div>
        <TaskInput />
        <TaskList tasks={todoTasks} />
      </div>
    </Page>
  )
}
