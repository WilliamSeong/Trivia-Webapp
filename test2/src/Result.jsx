import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import he from "he";
import Styled from "styled-components";

const StyledButton = Styled.button`
    background: transparent;
    width: 10vw;
    height: 5vh;
    cursor: grab;
`

export default function Result({ res, ans, question, onHomeClick }) {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        onHomeClick();
        navigate("/")
    };

    return(
        <>
            <h1>{res}</h1>
            <h1>{he.decode(question)}</h1>
            <h1>Answer: {he.decode(ans)}</h1>
            <StyledButton onClick={handleHomeClick}>Home</StyledButton>
        </>
    )
}

Result.propTypes = {
    res: PropTypes.string.isRequired,
    // ans: PropTypes.string.isRequired,
    // question: PropTypes.string.isRequired
}