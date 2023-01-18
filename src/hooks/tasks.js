import React, { createContext, useContext, useReducer } from 'react'

const initialState = {}

const TaskContext = createContext()

const reducer = (state, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'add':
      const { name } = action.payload
      const newId = Object.values(state).length + 1
      newState[newId] = {
        id: newId,
        name,
        isComplete: false,
      }
      return newState
    case 'updateIsComplete':
      const { id, isComplete } = action.payload
      newState[id].isComplete = isComplete
      return newState
    default:
      throw new Error()
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskManager = () => {
  const { state, dispatch } = useContext(TaskContext)

  const updateIsComplete = ({ id, isComplete }) => {
    dispatch({
      type: 'updateIsComplete',
      payload: {
        id,
        isComplete,
      },
    })
  }

  const addTask = ({ name }) => {
    dispatch({
      type: 'add',
      payload: {
        name,
      },
    })
  }

  return {
    addTask,
    updateIsComplete,
    tasks: Object.values(state),
  }
}
