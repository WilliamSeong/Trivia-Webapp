import Dropdown from "./DropdownMenu.jsx";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";

const StyledButton = Styled.button`
    width: 30vw;
    height: 10vh;
    background-color: transparent;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
        transform: scale(1.02);
    }
`

const StyledButtonText = Styled.h1`
    padding: 0;
    margin: 0;
`

export default function QuestionMenu() {
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState(null);
    const [difficulty, setDifficulty] = useState(null);
    const [questionType, setQuestionType] = useState(null);

    const categories = ["Any Category", "Entertainment: Books", "Entertainment: Film", "Entertainment: Music",
        "Entertainment: Musicals & Theatres", "Entertainment: Television", "Entertainment: Video Games", "Entertainment: Board Games",
        "Science & Nature", "Science: Computers", "Science: Mathematics", "Mythology", "Sports", "Geography", "History",
        "Politics", "Art", "Celebrities", "Animals", "Vehicles", "Entertainment: Comics", "Science: Gadgets", "Entertainment: Japanese Anime & Manga",
        "Entertainment: Cartoon & Animations"];
    const difficulties = ["Easy", "Medium", "Hard"];
    const type = ["Multiple Choice", "True / False"];

    const categoryIds = {
        "Any Category": "9",
        "Entertainment: Books": "10",
        "Entertainment: Film": "11",
        "Entertainment: Music": "12",
        "Entertainment: Musicals & Theatres": "13",
        "Entertainment: Television": "14",
        "Entertainment: Video Games": "15",
        "Entertainment: Board Games": "16",
        "Science & Nature": "17",
        "Science: Computers": "18",
        "Science: Mathematics": "19",
        "Mythology": "20",
        "Sports": "21",
        "Geography": "22",
        "History": "23",
        "Politics": "24",
        "Art": "25",
        "Celebrities": "26",
        "Animals": "27",
        "Vehicles": "28",
        "Entertainment: Comics": "29",
        "Science: Gadgets": "30",
        "Entertainment: Japanese Anime & Manga": "31",
        "Entertainment: Cartoon & Animations": "32"
    }

    const handleSelect = (option, menuType) => {
        switch (menuType) {
            case "Category":
                setCategoryId(categoryIds[option]);
                break;
            case "Difficulty":
                setDifficulty(option.toLowerCase());
                break;
            case "Question Type":
                if (option === "True / False") {
                    setQuestionType("boolean");
                } else {
                    setQuestionType("multiple");
                }
                break;
            default:
                break;
        }
    };

    const handleStartQuestion = () => {
        if (categoryId && difficulty && questionType) {
            navigate("/question", {
                state: {
                    categoryId,
                    difficulty,
                    type: questionType,
                },
            });
        } else {
            alert("Please select all options.");
        }
    }


    return (
        <div className="QuestionMenu">
            <h1>What type of Question would you like?</h1>
            <Dropdown options={categories} onSelect={handleSelect} menuType="Category"/>
            <Dropdown options={difficulties} onSelect={handleSelect} menuType="Difficulty"/>
            <Dropdown options={type} onSelect={handleSelect} menuType="Question Type"/>
            <StyledButton onClick={handleStartQuestion}><StyledButtonText>Start Quiz</StyledButtonText></StyledButton>
        </div>
    );
}
