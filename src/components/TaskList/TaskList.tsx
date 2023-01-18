import { Checkbox, IconButton, List, ListItem } from "@mui/material";
import { useTaskManager } from "../../hooks/tasks"

interface taskListProps {
    tasks: {
        id: string,
        isComplete: boolean,
        name: string
    }[]
}
export const TaskList = ({ tasks } : taskListProps) => {
    const { updateIsComplete } = useTaskManager();
    
    const handleCheck = (isComplete: boolean, id: string) => {
        updateIsComplete({isComplete, id})
    }

    return (
        <div>
            <List>
            {tasks.map((task, index) => (
                <ListItem 
                    key={index}
                    secondaryAction={
                        <Checkbox
                            checked={task.isComplete}
                            onChange={() => handleCheck(!task.isComplete, task.id)}
                        />
                    }
                    divider
                    sx={{
                        textDecoration: task.isComplete ? "line-through" : ""
                    }}
                >
                    {task.name}
                </ListItem>
            ))}
            </List>
        </div>
    )
}