import './App.css';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Restart } from './components/Restart';
import { Message } from './components/Message';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
     <GlobalProvider>
   
      <Header/>
      <Grid/>
      <Restart/>
      <Message/>

    </GlobalProvider>
  );
}

export default App;
/*
    +---+---+---+
    | 0 | 1 | 2 |
    +---+---+---+
    | 3 | 4 | 5 |
    +---+---+---+
    | 6 | 7 | 8 |
    +---+---+---+
*/

// const wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]