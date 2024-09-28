import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import he from "he";
import Styled from "styled-components";
import {useSound} from "use-sound";
import hover from "./assets/Technology/Technology Electronic Button Beep Digital Camera 04.wav";

const StyledLi = Styled.h5`
    list-style: none;
    margin: 1vw auto;
    width: 40vw;
    display: flex;
    border-radius: 25px;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`;

const StyledButton = Styled.button`
    margin: auto;
    background-color: transparent;
    font-size: 3vw;
`;

export default function List({ correct, incorrect, correct_choice, incorrect_choice }) {
    // Pass in props for the correct answer and the list of incorrect answers

    // Turn the correct answer choice into an array of the [answer, true, and a random number]
    let correctpair = [correct, true, Math.random()];

    let incorrectpairs = [];

    // The main purpose of this part is to list the answer choices in a random order

    incorrect.map((answer)=>
        incorrectpairs.push([answer, false, Math.random()])
    ) // Map each incorrect answer choice to an array of the [answer, false, and a random number]

    // combine the array of arrays
    let answers = [correctpair, ...incorrectpairs]

    // sorting the choices by the random number such that they appear in a random order
    function sortTwoArrays(a, b){
        return (a[2] - b[2]);
    }

    answers.sort(sortTwoArrays);

    const [hoverAnswer] = useSound(hover);

    return(

        <>
            {
                // Go through the random array from before to render the choices, and depending on the bool create the NavLink
                // to the correct or incorrect variation of the results page
                answers.map((answer, index) => (
                    answer[1] ? (
                        <StyledLi key={index}><StyledButton onClick={correct_choice} onMouseEnter={() => hoverAnswer()}>{ he.decode(answer[0]) }</StyledButton></StyledLi>
                    ) : (
                        <StyledLi key={index}><StyledButton onClick={incorrect_choice} onMouseEnter={() => hoverAnswer()}>{he.decode(answer[0])}</StyledButton></StyledLi>
                    )
                ))
            }
        </>
    )
}

List.propTypes ={
    correct: PropTypes.string.isRequired,
    incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
}