import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import he from "he";
import Styled from "styled-components";

const StyledLi = Styled.li`
    list-style: none;
    margin: 1vw auto;
    width: 40vw;
    display: flex;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`

const StyledNavLink = Styled(NavLink)`
    text-decoration: none;
    font-size: 3vw;
    border: 5px solid black;
    color: black;
    width: 40vw;
`

export default function List({ correct, incorrect }) {

    let correctpair = [correct, true, Math.random()];
    let incorrectpairs = [];

    incorrect.map((answer)=>
        incorrectpairs.push([answer, false, Math.random()])
    )

    let answers = [correctpair, ...incorrectpairs]

    function sortTwoArrays(a, b){
        return (a[2] - b[2]);
    }

    answers.sort(sortTwoArrays);

    return(
        <>
            <ul>
                {
                    answers.map((answer, index) => (
                        answer[1] ? (
                            <StyledLi key={index}><StyledNavLink to={"/correct"}>{ he.decode(answer[0]) }</StyledNavLink></StyledLi>
                        ) : (
                            <StyledLi key={index}><StyledNavLink to={"/incorrect"}>{ he.decode(answer[0])}</StyledNavLink></StyledLi>
                        )
                        ))
                }
            </ul>
        </>
    )
}

List.propTypes ={
    correct: PropTypes.string.isRequired,
    incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
}