import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
