import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useTaskManager } from '../../hooks/tasks'

export const TaskInput = () => {
  const { addTask } = useTaskManager()
  const [inputValue, setInputValue] = useState<string>('')
  const handleAddTask = () => {
    if (inputValue) {
      addTask({ name: inputValue })
      setInputValue('')
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="task-input"
        label="Add task"
        variant="standard"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onClick={handleAddTask}
        sx={{
          marginLeft: '1rem',
        }}
      >
        Add Task
      </Button>
    </div>
  )
}
