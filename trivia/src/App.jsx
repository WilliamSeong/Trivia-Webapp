import QuestionMenu from "./QuestionMenu.jsx";
import Styled, {createGlobalStyle} from "styled-components";



const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: black;
        --secondary-color: #FFFFFF;
        --background-color: #d4d9d9;
        --button-bg: #61dafb;
        --button-text: #282c34;
    }

    body {
        width: 80%;
        margin: auto;
        text-align: center;
        background-color: var(--background-color);
        color: var(--secondary-color);
        font-family: "Lucida Console", Monospace;
    }
    
    h1, h2, h3, h4, h5, h6, li {
        color: var(--primary-color);
    }

    button {
        background-color: var(--button-bg);
        color: var(--button-text);
        border: none;
        padding: 1vh 2vw;
        margin: 2vh;
        border-radius: 25px;
        cursor: pointer;
    }
`;

const StyledA = Styled.a`
    text-decoration: none;
    color: red;
    display: inline-block;
    margin-top: 20px;
    padding: 1vh 2vw;
    background-color: white;
    border-radius: 15px;
`;

export default function App() {

    return (
        <>
            <GlobalStyle />
            <StyledA href={"./App.jsx"}>Quit</StyledA>
            <QuestionMenu />
        </>
    )
}