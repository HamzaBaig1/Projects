import { useQuiz } from "../context/QuizContext"

function ExitButton() {
    const { dispatch } = useQuiz();
    return (

        <button className="btn exit-btn" onClick={() => dispatch({ type: 'reset' })}>Exit</button>

    )
}

export default ExitButton
