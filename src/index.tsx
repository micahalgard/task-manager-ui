import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { CompletedTasks } from './pages/CompletedTasks/CompletedTasks';
import { About } from './pages/About/About';
import { TodoTasks } from './pages/TodoTasks/TodoTasks';
import { TaskProvider } from './hooks/tasks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoTasks />,
  },
  {
    path: "/completedTasks",
    element: <CompletedTasks />
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
