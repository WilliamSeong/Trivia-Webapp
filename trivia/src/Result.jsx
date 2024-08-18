import Styled from "styled-components";
import he from "he";

const StyledA = Styled.a`
    text-decoration: none;
    color: black;
    padding: 1vh 2vw;
    background-color: white;
    border-radius: 15px;
`;

export default function Result({ correct, incorrect, review }) {

    const grade = correct/(correct+incorrect) * 100;
    console.log("review: ", { review });

    return(
        <>
            <h1>Questions correct: { correct }</h1>
            <h1>Questions incorrect: { incorrect }</h1>
            <h1>Grade: { grade }%</h1>
            <StyledA href={"./App.jsx"}>Home</StyledA>
            <h1>Questions</h1>
            {
                review.map((item)=> (
                    <div key={item[0]}>
                        <h1>{he.decode(item[0])}</h1>
                        <h2>Correct: {he.decode(item[1])} </h2>
                        <h2>Incorrect: { item[2].map((item) => (
                            <h6 key={item[0]}>{ he.decode(item) }</h6>
                        )) }</h2>
                        <hr/>
                    </div>
                ))
            }
        </>

    )
}