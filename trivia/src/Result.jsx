import Styled from "styled-components";
import he from "he";
import ResultCard from "./ResultCard.jsx";

const StyledA = Styled.a`
    text-decoration: none;
    color: black;
    padding: 1vh 2vw;
    background-color: white;
    border-radius: 15px;
`;

export default function Result({ correct, incorrect, review, results }) {

    const grade = correct/(correct+incorrect) * 100;
    console.log("review: ", { review });
    console.log("results: ", { results });

    return(
        <>
            <h1>Questions correct: { correct }</h1>
            <h1>Questions incorrect: { incorrect }</h1>
            <h1>Grade: { grade }%</h1>
            <StyledA href={"./App.jsx"}>Home</StyledA>
            <h1>Questions</h1>

            <ResultCard review={review} results={results} />
        </>

    )
}