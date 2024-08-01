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
    const [current, setCurrent] = useState(null); // Initializing with null
    const [questionindex, setQuestionindex] = useState(0);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    const amount = 50; // TODO: get value from menu component
    const category = "9"; // TODO: get value from menu component
    const difficulty = "medium"; // TODO: get value from menu component
    const type = ""; // TODO: get value from menu component

    useEffect(() => {
        async function fetcher() {
                const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
                const { results } = await response.json();

                if (results) {
                    setData(results);
                    setCurrent(results[0]);
                    setLoading(false);
                    console.log(results)
                }
        }

        fetcher()
            .then(() => console.log("Good Fetch"))
            .catch(() => console.log("Bad Fetch"));
    }, [fetchTrigger]);

    useEffect(() => {
        if (data.length > 0) {
            setCurrent(data[questionindex]);
        }
    }, [data, questionindex]);

    function handleHomeClick() {
        console.log("handleHomeclick");
        if (questionindex + 1 === amount) {
            setFetchTrigger(prev => prev + 1);
            setQuestionindex(0);
            console.log(amount, " questions completed");
        } else {
            setQuestionindex(prev => prev + 1);
        }
    }

    return (
        <>
            <GlobalStyle />
            <Routes key={fetchTrigger}>
                <Route path="/" element={
                                            <Question
                                                loading={loading}
                                                data={current}
                                            />
                                        }
                />
                <Route path="/correct" element={
                                                    <Result
                                                        res="Correct!"
                                                        ans={current ? current.correct_answer : ""}
                                                        question={current ? current.question : ""}
                                                        onHomeClick={handleHomeClick}
                                                    />
                                                    }
                />
                <Route path="/incorrect" element={
                                                    <Result
                                                    res="Wrong!"
                                                    ans={current ? current.correct_answer : ""}
                                                    question={current ? current.question : ""}
                                                    onHomeClick={handleHomeClick}
                                                    />
                                                    }
                />
            </Routes>
        </>
    );
}


export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
