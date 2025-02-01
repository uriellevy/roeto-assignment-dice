import './App.scss'
import GameBoard from './components/GameBoard'
import { CONSTS } from './consts/consts'

function App() {
  const { GAME_TITLE } = CONSTS;

  return (
    <div className="app">
      <h1>{GAME_TITLE}</h1>
      <GameBoard />
    </div>
  )
}

export default App