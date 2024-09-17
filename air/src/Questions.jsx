import List from "./List.jsx";
import {useState, useEffect} from "react";
import he from "he";
import Result from "./Result";

export default function Questions({list}) {

    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [finish, setFinish] = useState(false);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [review, setReview] = useState([]);
    const [results, setResults] = useState([]);

        // useEffect for incrementing question
    useEffect(() => {

        setQuestion(list[index]);
        setLoading(false);

    }, [list, index])

    // useEffect for detecting the end of the quiz
    useEffect(() => {
        if (index === list.length){
            console.log("end of questions");
            setFinish(true);
        }
    }, [index])

    function correct_choice() {
        console.log("You clicked the correct answer");
        const item = list[index];
        setReview(review => [...review, [item.question, item.correct_answer, item.incorrect_answers]]);
        setResults(results => [...results, "true"]);
        setCorrect(correct+1);
        setIndex(index+1);
    }

    function incorrect_choice() {
        console.log("You clicked the wrong answer");
        const item = list[index];
        setReview(review => [...review, [item.question, item.correct_answer, item.incorrect_answers]]);
        setResults(results => [...results, "false"]);
        setIncorrect(incorrect+1);
        setIndex(index+1);
    }


    // For printing the functionality of the buttons for registering correct or incorrect choices
    // useEffect(() => {
    //     console.log(correct, " correct so far");
    //     console.log(incorrect, " incorrect so far");
    // }, [correct, incorrect]);

    // useEffect(() => {
    //     const len = list.length;
    //     for (let i = 0; i < len; i++) {
    //         const item = list[i];
    //         setReview(review => [...review, [item.question, item.correct_answer, item.incorrect_answers]]);
    //     }
    // },[])

    return(
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    finish ? (
                        <Result correct={correct} incorrect={incorrect} review={review} results={results}/>
                        ) : (
                        <>
                            <h1>{he.decode(question.question)}</h1>
                            <List correct={question.correct_answer} incorrect={question.incorrect_answers}
                                  correct_choice={correct_choice} incorrect_choice={incorrect_choice}/>
                            {/*<button onClick={() => setIndex(index + 1)}>Click Me</button> (Potential skip button)*/}
                        </>
                    )
                )
            }
        </>
    )
}