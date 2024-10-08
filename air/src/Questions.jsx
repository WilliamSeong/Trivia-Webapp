import List from "./List.jsx";
import {useState, useEffect, Fragment} from "react";
import he from "he";
import Result from "./Result";
import Styled from "styled-components";
import RedDot from "./assets/reddot.png"
import GreenDot from "./assets/greendot.png"
import {useSound} from "use-sound";
import ding from "./assets/ding-101492.mp3";
import dong from "./assets/wrong-47985.mp3"

export default function Questions({list}) {

    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [finish, setFinish] = useState(false);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [review, setReview] = useState([]);
    const [results, setResults] = useState([]);
    // const [state, setState] = useState("#d4d9d9")
    const [progress, setProgress] = useState([]);

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

    // useEffect for detecting when finished
    // useEffect(() => {
    //     if (finish){
    //         setState("#d4d9d9")
    //     }
    // })

    // useEffect for populating the progress list
    useEffect(() => {
        let hold = [...list];

        for (let i = 0; i < list.length; i++) {
            hold[i] = " ? "
        }

        setProgress(hold);
    }, [])

    const [correctDing] = useSound(ding);
    const [wrongDong] = useSound(dong);

    function correct_choice() {
        console.log("You clicked the correct answer");
        correctDing();
        const item = list[index];
        // setState("#d3ffee")
        setProgress(prevProgress => {
            const newProgress = [...prevProgress];
            newProgress[index] = " ✓ ";
            return newProgress;
        })
        setReview(review => [...review, [item.question, item.correct_answer, item.incorrect_answers, "true"]]);
        setResults(results => [...results, "true"]);
        setCorrect(correct+1);
        setIndex(index+1);
    }

    function incorrect_choice() {
        console.log("You clicked the wrong answer");
        wrongDong();
        const item = list[index];
        // setState("#ffbfbf")
        setProgress(prevProgress => {
            const newProgress = [...prevProgress];
            newProgress[index] = " X ";
            return newProgress;
        })
        setReview(review => [...review, [item.question, item.correct_answer, item.incorrect_answers, "false"]]);
        setResults(results => [...results, "false"]);
        setIncorrect(incorrect+1);
        setIndex(index+1);
    }

    return(
        <div>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    finish ? (
                        <Result correct={correct} incorrect={incorrect} review={review} results={results} progress={progress} />
                        ) : (
                        <>
                            <h1>{he.decode(question.question)}</h1>
                            <List correct={question.correct_answer} incorrect={question.incorrect_answers}
                                  correct_choice={correct_choice} incorrect_choice={incorrect_choice}/>
                            {/*<button onClick={() => setIndex(index + 1)}>Click Me</button> (Potential skip button)*/}
                            {
                                progress.map((item, index) => (
                                    <Fragment key={index} >
                                        {(item === " X ") ? (
                                            <span style={{ display: "inline-block" }}>
                                                &nbsp;
                                                <img style={{ width: "2vw" }} src={RedDot} alt="red dot" />
                                                &nbsp;
                                            </span>
                                        ) : (item === " ✓ ") ? (
                                            <span style={{display: "inline-block"}}>
                                                &nbsp;
                                                <img style={{width: "2vw"}} src={GreenDot} alt="green dot"/>
                                                &nbsp;
                                            </span>
                                        ) : (
                                            <span style={{ display: "inline-block" }}>
                                                <h1>&nbsp;?&nbsp;</h1>
                                            </span>
                                        )}
                                        {(index % 10 === 9) && <div style={{ clear: "both" }}></div>}
                                    </Fragment>
                                ))
                            }
                        </>
                    )
                )
            }
        </div>
    )
}