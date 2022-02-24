import './App.css';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <PersistentDrawerLeft />
      </div>
    </Router>
  );
}

export default App;
