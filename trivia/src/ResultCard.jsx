import he from "he";
import {useState} from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    border-style: solid;
    border-width: 5px;
    border-color: #d3ffee;
`;

export default function ResultCard ({review, results}) {
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
        <StyledDiv>
            <button onClick={() => Decrement()}>&lt;</button>
            <button onClick={() => Increment()}>&gt;</button>
            <h2>{results[Index]}</h2>
            <h1>{he.decode(review[Index][0])}</h1>
            <h2>{he.decode(review[Index][1])}</h2>
            {
                review[Index][2].map((item) => (
                    <div key={item}>
                        <h2>{he.decode(item)}</h2>
                    </div>
                ))
            }

            {/*{*/}
            {/*    prop.map((item) => (*/}
            {/*        <div key={item[0]}>*/}
            {/*            <h1>{he.decode(item[0])}</h1>*/}
            {/*            <h2 style={{"color": "lightblue"}}>Correct: {<h6*/}
            {/*                style={{"color": "lightblue"}}>{he.decode(item[1])}</h6>} </h2>*/}
            {/*            <h2 style={{"color": "#FF5733"}}>Incorrect: {item[2].map((answer) => (*/}
            {/*                <h6 style={{"color": "#FF5733"}} key={answer}>{he.decode(answer)}</h6>*/}
            {/*            ))}</h2>*/}
            {/*            <hr/>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </StyledDiv>
    )
}