import { useState } from "react";

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
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption || `Select a ${menuType}`}
                <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;


