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
import { useQuiz } from './context/QuizContext'
// import ExitButton from './components/ExitButton'


function App() {
  const { status } = useQuiz()

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'Ready' && <StartScreen />}
        {status === 'Active' && <> <ExitButton /> <Progress />
          <Questions />
          <Footer>
            <Timer />

            <NextButton />
          </Footer>
        </>}
        {status === 'Finished' && <FinishScreen />}
      </Main>
    </div>
  )
}

export default App
