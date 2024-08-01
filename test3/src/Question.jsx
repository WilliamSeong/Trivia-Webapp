import he from "he";
import List from "./List.jsx";

export default function Question({ loading, data}) {

    return(
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <h1>{ he.decode(data.question) }</h1>
                        <List correct={data.correct_answer} incorrect={data.incorrect_answers}/>
                    </>
                )
            }
        </>
    )
}