import QuestionMenu from "./QuestionMenu.jsx";
import Styled, {createGlobalStyle} from "styled-components";
import {useState} from "react";
import {useSound} from 'use-sound';
import test from "./assets/Science Fiction/Science Fiction Sci-Fi Electronic Access Granted Tone 38.wav"




const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: ${({ theme }) => theme.primaryColor};
        --secondary-color: ${({ theme }) => theme.secondaryColor};
        --background-color: ${({ theme }) => theme.backgroundColor};
        --button-bg: ${({ theme }) => theme.buttonBg};
        --button-text: ${({ theme }) => theme.buttonText};
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

const lightTheme = {
    primaryColor: 'black',
    secondaryColor: '#FFFFFF',
    backgroundColor: '#d4d9d9',
    buttonBg: '#61dafb',
    buttonText: '#282c34',
};

const darkTheme = {
    primaryColor: '#FFFFFF',
    secondaryColor: '#282c34',
    backgroundColor: '#333',
    buttonBg: '#282c34',
    buttonText: '#61dafb',
};

// Add more themes as needed
const pinkTheme = {
    primaryColor: '#FF69B4',
    secondaryColor: '#FFF5F7',
    backgroundColor: '#FFD1DC',
    buttonBg: '#FF69B4',
    buttonText: '#282c34',
};

export default function App() {

    const themes = [lightTheme, darkTheme, pinkTheme];
    const [themeindex, setThemeindex] = useState(0)
    const [theme, setTheme] = useState(themes[themeindex]);

    const [play] = useSound(test);

    const toggleTheme = () => {
        play();
        setThemeindex(prevThemeindex =>{
            let nextIndex = (prevThemeindex + 1) % themes.length;
            setTheme(themes[nextIndex])
            return nextIndex
        });
    };

    return (
        <>
            <GlobalStyle theme={theme} />
            <button onClick={toggleTheme}>Change Theme</button>
            <QuestionMenu/>
        </>
    )
}