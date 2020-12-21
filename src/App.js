import logo from './logo.svg';
import './App.css';
import Anagram from './components/anagram';
import { Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Anagram/>
      </header>
    </div>
  );
}

export default App;
