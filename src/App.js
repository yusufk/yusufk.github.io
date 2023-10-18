import './App.css';
import About from './components/about'
import Header from './components/header';
import Contact from './components/contact';
import Resume from './components/resume';
import Repositories from './components/repos';
import Articles from './components/articles';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Resume></Resume>
      <Repositories></Repositories>
      <Articles></Articles>
    </div>
  );
}

export default App;
