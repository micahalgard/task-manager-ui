import { Page } from "../../components/Page/Page"

export const About = () => {
    return (
        <Page
            title="About"
        >
            <p>
                This project consists of 3 main parts, a task manager hook, a task list component, task input component. The task manager hook uses react useContext that allows us to share and maintain a state throughout different components. The task manager also takes advantage of react useReducer to manage the state stored in useContext. The task input component takes in a string and stores that string as a task object in our context on button click . The task list component takes in a task list as a prop and displays it. It also toggles the isComplete boolean on each task.
            </p>
            <p>
                I went with creating my own reducer and state manager with built in react hooks rather than using a library such as redux. Redux does essentially the same thing but with much more boilerplate code. It seemed easier to create my own hook to avoid the extra dependency and setup. For a larger project I would probably set up redux. 
            </p>
            <p>
                I took advantage of Material UI and react router for component styling and navigation portion of this app. I would definitely use these in a production application.
            </p>
            <h4>
                Dependency docs:
            </h4>
            <div>
                <a href="https://mui.com/material-ui/getting-started/overview/">
                    Material UI Docs
                </a>
            </div>
            <div>
                <a href="https://reactrouter.com/en/main">
                    React Router
                </a>
            </div>
            <div>
                <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">
                    useContext
                </a>
            </div>
            <div>
                <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">
                    useReducer
                </a>
            </div>
        </Page>
    )
}