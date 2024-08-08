import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Result from "./Result.jsx";
import Question from "./Question.jsx";
import QuestionMenu from "./QuestionMenu.jsx";
import {createGlobalStyle} from "styled-components";
import QuestionContext from "./QuestionContext.jsx";

// William and Jordan

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #4CAF50;
        --secondary-color: #FFFFFF;
        --background-color: #282c34;
        --button-bg: #61dafb;
        --button-text: #282c34;
    }

    body {
        width: 80%;
        margin: auto;
        text-align: center;
        background-color: var(--background-color);
        color: var(--secondary-color);
        font-family: "Lucida Console", Monospace;
    }
    
    h1, h2, h3, h4, h5, h6, li {
        color: var(--primary-color);
    }

    button {
        background-color: var(--button-bg);
        color: var(--button-text);
        border: none;
        padding: 1vh 2vw;
        margin: 2vh;
        border-radius: 25px;
        cursor: pointer;
    }
`;

// Basic RouterProvider setup
const router = createBrowserRouter(
    [
        {
            path:"*",
            Component: Root
        },
    ]
);

function Root() {

    return (
        <>
            {/*Apply Global Style*/}
            <GlobalStyle />
            {/*Set context to get question using api call*/}
            <QuestionContext>
                <Routes>
                    {/*Route to menu page*/}
                    <Route path="/*" element={<QuestionMenu/>}/>
                    {/*Route to question page*/}
                    <Route path="/question" element={<Question/>}/>
                    {/*Route to results page depending on if the choice was correct or wrong*/}
                    <Route path="/correct" element={<Result res="Correct!"/>}/>
                    <Route path="/incorrect" element={<Result res="Wrong!"/>}/>
                </Routes>
            </QuestionContext>

        </>
    );
}


export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
