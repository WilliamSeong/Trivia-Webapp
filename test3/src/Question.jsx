import he from "he";
import List from "./List.jsx";
import {useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuestionContext } from "./QuestionContext.jsx";

export default function Question() {
    const location = useLocation();
    const { categoryId, difficulty, type } = location.state;

    const { question, correctAnswer, incorrectAnswers, loading, fetchQuestion } = useContext(QuestionContext);
    useEffect(() => {
        categoryId && difficulty && type && fetchQuestion(categoryId, difficulty, type);
    }, [categoryId, difficulty, type]);

    return(
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <h1>{ he.decode(question) }</h1>
                        <List correct={correctAnswer} incorrect={incorrectAnswers}/>
                    </>
                )
            }
        </>
    )
}