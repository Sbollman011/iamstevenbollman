import logo from './logo.svg';
import './App.css';
import JumboTron from './components/JumboTron';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
  
   <div className="App">
      <header className="App-header">
    <JumboTron/>
      </header>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
}

export default App;
