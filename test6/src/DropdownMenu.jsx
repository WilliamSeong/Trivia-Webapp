import { useState } from "react";
import Styled from "styled-components";

// Jordan

const StyledOptionsHeader = Styled.h2`
    margin: 1vh auto;
    padding: 1vh 5vw;
    width: 50%;
    height: auto;
    border-radius: 25px;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`

const StyledOptions = Styled.h4`
    margin: 1vh auto;
    padding: 1vh 5vw;
    width: 30%;
    height: auto;
    border-radius: 25px;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`


const Dropdown = ({ options, onSelect, menuType}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {

        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option, menuType);
    };

    return (
        <div className="dropdown">
            <StyledOptionsHeader className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption || `Select a ${menuType}`}
                <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}> ▼</span>
            </StyledOptionsHeader>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((option, index) => (
                        <StyledOptions
                            key={index}
                            className="dropdown-option"
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


