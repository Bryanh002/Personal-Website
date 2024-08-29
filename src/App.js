
import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Pages/Home.js';
import Clubs from './Pages/Clubs.js';
import Projects from './Pages/Projects.js';




function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;


