import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Questions from './components/Questions'
import NextButton from './components/NextButton'
import Progress from './components/Progress'
import FinishScreen from './components/FinishScreen'
import Timer from './components/Timer'
import Footer from './components/Footer'
import ExitButton from './components/ExitButton'
// import ExitButton from './components/ExitButton'

const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  filteredQuestions: [],

  //loading,ready,error,finished
  status: 'Loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  difficulty: 'all',

}
function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state, questions: action.payLoad, status: 'Ready', filteredQuestions: action.payLoad
      }
    case 'dataFailed':
      return {
        ...state, status: 'Error'
      }


    case 'Start':
      return {
        ...state, status: 'Active', secondsRemaining: state.filteredQuestions.length * SECS_PER_QUESTION
      }


    case 'newAnswer':
      const question = state.filteredQuestions.at(state.index)
      return {
        ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points : state.points
      }
    case 'nextQuestion':
      return {
        ...state, index: state.index + 1, answer: null
      }
    case 'finish':
      return {
        ...state, status: 'Finished', highScore: state.points > state.highScore ? state.points : state.highScore
      }
    case 'restart':
      return {
        ...initialState, questions: state.questions, filteredQuestions: state.filteredQuestions, difficulty: state.difficulty, status: 'Ready'

      }
    case 'tick':
      return {
        ...state, status: state.secondsRemaining === 0 ? 'Finished' : state.status, secondsRemaining: state.secondsRemaining - 1
      }
    case 'difficulty':
      console.log(action.payload)
      return {
        ...state, difficulty: action.payload, filteredQuestions: action.payload === 'all' ? state.questions : state.questions.filter((question) => question.difficulty === action.payload)
      }
    case 'reset':
      return {
        ...initialState, questions: state.questions, filteredQuestions: state.filteredQuestions, status: 'Ready'
      }


    default:
      throw new Error('unknown data')
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { filteredQuestions, status, index, answer, points, highScore, secondsRemaining, difficulty } = state;

  const numQuestions = filteredQuestions.length;
  const maxPossiblePoints = filteredQuestions.reduce((prev, curr) => prev + curr.points, 0)
  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();
        dispatch({ type: 'dataRecieved', payLoad: data })
      } catch (err) {
        dispatch({ type: 'dataFailed' })
      }
    }
    fetchData()
  }, [])
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'Ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} difficulty={difficulty} />}
        {status === 'Active' && <> <ExitButton dispatch={dispatch} /> <Progress numQuestions={numQuestions} index={index} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer} dispatch={dispatch} />
          <Questions questions={filteredQuestions[index]} dispatch={dispatch} answer={answer} />
          <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

            <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />
          </Footer>
        </>}
        {status === 'Finished' && <FinishScreen dispatch={dispatch} points={points} maxPossiblePoints={maxPossiblePoints} highScore={highScore} />}
      </Main>
    </div>
  )
}

export default App
