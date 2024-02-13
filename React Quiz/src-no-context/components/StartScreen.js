import Difficulty from "./Difficulty"

function StartScreen({ numQuestions, dispatch, difficulty }) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz !</h2>
            <h3>{numQuestions} Questions to Test Your React Mastery</h3>
            <Difficulty dispatch={dispatch} difficulty={difficulty} />
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'Start' })}>Let's Start</button>
        </div>
    )
}

export default StartScreen
