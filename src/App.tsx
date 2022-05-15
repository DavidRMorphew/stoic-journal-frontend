import logo from './logo.svg';
import './App.css';
import Quotes from './features/quotes/Quotes'
import { useScreenSize } from "./utils/useScreenSize";

function App() {
  return (
    <div className="App">
      <header className={`App-header${useScreenSize() === 'mobile' ? '-mobile' : ''}`}>
        <img src={logo} className={`App-logo${useScreenSize() === 'mobile' ? '-mobile' : ''}`} alt="logo" />
      </header>
          <Quotes />
    </div>
  );
}

export default App;
