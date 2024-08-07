import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Result from "./Result.jsx";
import Question from "./Question.jsx";
import QuestionMenu from "./QuestionMenu.jsx";
import {createGlobalStyle} from "styled-components";
import QuestionContext from "./QuestionContext.jsx";


const GlobalStyle = createGlobalStyle`
    body{
        width: 80%;
        margin: auto;
        text-align: center;
    }
`

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
            <GlobalStyle />
            <QuestionContext>
                <Routes>
                    <Route path="/" element={<QuestionMenu/>}/>
                    <Route path="/question" element={
                        <Question
                        />
                    }
                    />
                    <Route path="/correct" element={
                        <Result
                            res="Correct!"
                        />
                    }
                    />
                    <Route path="/incorrect" element={
                        <Result
                            res="Wrong!"
                        />
                    }
                    />
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
