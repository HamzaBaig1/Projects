import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
    const { dispatch, answer } = useQuiz()
    const hasAnswer = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, index) => <button key={option} disabled={hasAnswer} className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswer ? index === question.correctOption ? 'correct' : 'wrong' : ''}`} onClick={() => { dispatch({ type: 'newAnswer', payload: index }) }}>{option}</button>)
            }
        </div >
    )
}

export default Options
