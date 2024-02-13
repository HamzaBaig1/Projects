import { useQuiz } from "../context/QuizContext"
import Difficulty from "./Difficulty"

function StartScreen() {
    const { numQuestions, dispatch } = useQuiz()
    return (
        <div className="start">
            <h2>Welcome to The React Quiz !</h2>
            <h3>{numQuestions} Questions to Test Your React Mastery</h3>
            <Difficulty />
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'Start' })}>Let's Start</button>
        </div>
    )
}

export default StartScreen
