import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import he from "he";
import Styled from "styled-components";
import {useContext} from "react";
import { QuestionContext } from "./QuestionContext";

// William

const StyledButton = Styled.button`
    width: 30vw;
    height: 10vh;
    background-color: transparent;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`;

const StyledButtonText = Styled.h1`
    padding: 0;
    margin: 0;
`;

export default function Result({ res }) {

    const navigate = useNavigate();
    const { question, correctAnswer } = useContext(QuestionContext);

    // Send back to question menu page
    const handleHomeClick = () => {
        navigate("/")
    };

    return(
        <>
            {/*Return the correct or incorrect message, the question and the correct question from the context*/}
            <h1>{res}</h1>
            <h1>{he.decode(question)}</h1>
            <h1>Answer: {he.decode(correctAnswer)}</h1>
            <StyledButton onClick={handleHomeClick}><StyledButtonText>Home</StyledButtonText></StyledButton>
        </>
    )
}

Result.propTypes = {
    res: PropTypes.string.isRequired,
    ans: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
}