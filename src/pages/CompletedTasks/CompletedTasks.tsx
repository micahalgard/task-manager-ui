import { List, ListItem } from "@mui/material";
import { Page } from "../../components/Page/Page"
import { TaskList } from "../../components/TaskList/TaskList";
import { useTaskManager } from "../../hooks/tasks"

export const CompletedTasks = () => {
    const { tasks } = useTaskManager();
    const completedTasks = tasks.filter(t => t.isComplete);
    return (
        <Page
            title="Completed Tasks"
        >
            <TaskList 
                tasks={completedTasks}
            />
        </Page>
    )
}

