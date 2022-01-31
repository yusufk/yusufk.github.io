import './App.css';
import About from './components/about'
import Header from './components/header';
import Contact from './components/contact';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Repositories from './components/repos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Repositories></Repositories>
    </div>
  );
}

export default App;
