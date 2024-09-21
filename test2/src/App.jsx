import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Result from "./Result.jsx";
import { useEffect, useState } from "react";
import Question from "./Question.jsx";
import {createGlobalStyle} from "styled-components";

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    useEffect(() => {
        async function fetcher() {
            const data = await fetch(`https://opentdb.com/api.php?amount=1`);
            const { results } = await data.json();

            if (results){
                setData(results[0]);
                setLoading(false);
                console.log(results[0])
            }
        }

        fetcher()
            .then(() => console.log("Good Fetch"))
            .catch(() => console.log("Bad Fetch"));
    }, [fetchTrigger])

    const handleHomeClick = () => setFetchTrigger(prev => prev + 1);

    return (
        <>
            <GlobalStyle />
            <Routes key={fetchTrigger}>
                <Route path="/" exact element={<Question loading={loading} data={data} />} />
                <Route path="/correct" exact element={<Result res={"Correct!"} ans={data.correct_answer} question={data.question} onHomeClick={handleHomeClick} />} />
                <Route path="/incorrect" exact element={<Result res={"Wrong!"} ans={data.correct_answer} question={data.question} onHomeClick={handleHomeClick} />} />
            </Routes>
        </>
    )
}

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
