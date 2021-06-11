import './App.css';
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'

function App() {
  return (
    <div className="App">
     <h1>redux</h1>
     <CounterClass />
     <hr/>
     <CounterFunction />
    </div>
  );
}

export default App;
