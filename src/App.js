import './App.css';
import About from './components/about'
import Header from './components/header';
import Resume from './components/resume';
import Repositories from './components/repos';
import Articles from './components/articles';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Resume></Resume>
      <Repositories></Repositories>
      <Articles></Articles>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
