import './App.css';
import About from './components/about'
import Header from './components/header';
import Resume from './components/resume';
import Repositories from './components/repos';
import Articles from './components/articles';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/repos" element={<Repositories />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Articles />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
