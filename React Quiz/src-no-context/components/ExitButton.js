function ExitButton({ dispatch }) {
    return (

        <button className="btn exit-btn" onClick={() => dispatch({ type: 'reset' })}>Exit</button>

    )
}

export default ExitButton
