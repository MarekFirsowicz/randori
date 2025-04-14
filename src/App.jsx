import Board from "./components/Board"
import Header from "./components/Header"
import Settings from "./components/Settings"
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function App() {
  

  return (
      <div className="wrapper">
      <Header />
      <Board />
      <Settings />
      </div>
  )
}

export default App
