import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      
        <div>
          <Quotes />
        </div>
      
    </div>
  );
}

export default App;
