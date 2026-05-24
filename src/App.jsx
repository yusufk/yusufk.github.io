import './App.css';
import About from './components/about'
import Header from './components/header';
import Resume from './components/resume';
import Repositories from './components/repos';
import Articles from './components/articles';
import Portfolio from './components/portfolio';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    if (location.pathname === '/') {
      header.classList.remove('header-top');
    } else {
      header.classList.add('header-top');
    }
  }, [location]);

  return (
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
