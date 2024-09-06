import { useState, useEffect } from "react";
import Questions from "./Questions.jsx";
import QuestionMenu from "./QuestionMenu.jsx";

export default function Fetch({ categoryid, difficulty, questiontype, amount }) {

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(categoryid, difficulty, questiontype, amount);

    useEffect(() => {
        async function fetcher() {
            // console.log(`https://opentdb.com/api.php?amount=${amount}&category=${categoryid}&difficulty=${difficulty}&type=${questiontype}`)
            const data = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryid}&difficulty=${difficulty}&type=${questiontype}`);
            const {results} = await data.json();

            if (results) {
                console.log(results);
                setState(results);
                setLoading(false);

            }
        }

        fetcher()
            .then(() => console.log("GOOD"))
            .catch(() => console.log("BAD"));
    }, []);


    return (
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Questions list={state} />
                )
            }
        </>
    )
}