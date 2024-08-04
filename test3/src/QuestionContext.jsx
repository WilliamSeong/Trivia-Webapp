import { createContext, useCallback, useReducer } from "react";


export const QuestionContext = createContext();

const initialState = {
    question: "",
    correctAnswer: "",
    incorrectAnswers: [],
    loading: true,
    error: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_QUESTION_SUCCESS":
            return {
                ...state,
                question: action.payload.question,
                correctAnswer: action.payload.correct_answer,
                incorrectAnswers: action.payload.incorrect_answers,
                loading: false,
            };
        case "GET_QUESTION_ERROR":
            return {
                ...state,
                question: "",
                loading: false,
                error: action.payload,
            }
    }
}

export default function QuestionContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchQuestion = useCallback(async (categoryId, difficulty, type) => {
        try {
            const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${categoryId}&difficulty=${difficulty}&type=${type}`);
            const { results } = await response.json();
            if (results) {
                dispatch({type: "GET_QUESTION_SUCCESS", payload: results[0]});
            }
        } catch (e) {
            dispatch({type: "GET_QUESTION_ERROR", payload: e.message});
        }
    }, [])

    return (
        <QuestionContext.Provider value={{...state, fetchQuestion}}>
            {children}
        </QuestionContext.Provider>
    )
}