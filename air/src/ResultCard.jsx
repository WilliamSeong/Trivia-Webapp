import he from "he";
import {useState} from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    background-color: ${props => props.theme.colors};
    height: 50vh;
    width: 75vw;
    margin: auto;
    border-radius: 100px;
    padding: 10px;
`;

export default function ResultCard ({review, results, progress}) {
    const [Index, setIndex] = useState(0);

    const len = review.length - 1;

    function Increment() {
        if (Index === len) {
            console.log(Index);
        } else {
            setIndex(Index + 1);
            console.log(Index);
        }
    }
    function Decrement() {
        if (Index === 0) {
            console.log(Index);
        } else {
            setIndex(Index - 1);
            console.log(Index);
        }
    }
    return (
        <>
            {
                (results[Index] === "true") ? (
                    <StyledDiv theme={{colors: "#d3ffee"}}>
                        <p>{progress}</p>
                        <button onClick={() => Decrement()}>&lt;</button>
                        <span style={{color: "black"}}>{Index + 1}</span>
                        <button onClick={() => Increment()}>&gt;</button>
                        <h1>{he.decode(review[Index][0])}</h1>
                        <h2>{he.decode(review[Index][1])}&#10004;</h2>
                        {
                            review[Index][2].map((item) => (
                                <div key={item}>
                                    <h2>{he.decode(item)}</h2>
                                </div>
                            ))
                        }

                    </StyledDiv>
                ) : (
                    <StyledDiv theme={{colors: "#ffbfbf"}}>
                        <p>{progress}</p>
                        <button onClick={() => Decrement()}>&lt;</button>
                        <span style={{color: "black"}}>{Index + 1}</span>
                        <button onClick={() => Increment()}>&gt;</button>
                        <h1>{he.decode(review[Index][0])}</h1>
                        <h2>{he.decode(review[Index][1])}&#10004;</h2>
                        {
                            review[Index][2].map((item) => (
                                <div key={item}>
                                    <h2>{he.decode(item)}</h2>
                                </div>
                            ))
                        }
                    </StyledDiv>
                )
            }
        </>
    )
}