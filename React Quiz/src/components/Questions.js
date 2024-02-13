import { useQuiz } from "../context/QuizContext"
import Options from "./Options"

function Questions() {
    const { filteredQuestions, index } = useQuiz()
    const questions = filteredQuestions.at(index)
    return (
        <div >
            <h4>{questions.question}</h4>
            <Options question={questions} />
        </div >
    )
}

export default Questions
