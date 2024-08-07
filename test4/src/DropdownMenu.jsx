import { useState } from "react";
import Styled from "styled-components";
// import Button from "./assets/Button.mp3"
// import useSound from 'use-sound';
// import MenuSelection from "./assets/menu-selection-102220-[AudioTrimmer.com].mp3"

const StyledOptionsHeader = Styled.h2`
    border: solid black 2px;
    margin: 1vh auto;
    padding: 1vh 5vw;
    width: 50%;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`

const StyledOptions = Styled.h3`
    border: solid black 2px;
    margin: 1vh auto;
    padding: 1vh 0;
    width: 30%;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`


const Dropdown = ({ options, onSelect, menuType}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    // const [play] = useSound(MenuSelection);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // sound.play();

        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option, menuType);
    };

    return (
        <div className="dropdown">
            <StyledOptionsHeader className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption || `Select a ${menuType}`}
                <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
            </StyledOptionsHeader>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((option, index) => (
                        <StyledOptions
                            key={index}
                            className="dropdown-option"
                            // onMouseEnter={() => play()}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </StyledOptions>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;


