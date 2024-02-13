function Difficulty({ dispatch, difficulty }) {
    return (
        <div className="difficulty">
            <h3>Select Difficulty</h3>
            <select className="btn-2 btn-ui" value={difficulty} onChange={(e) => { dispatch({ type: 'difficulty', payload: e.target.value }) }}>
                <option value='all' >All</option>
                <option value='easy' >Easy</option>
                <option value='moderate'>Moderate</option>
                <option value='hard'>Hard</option>
            </select>
        </div >
    )
}

export default Difficulty
