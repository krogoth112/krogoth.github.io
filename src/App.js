import './App.css';
import MarkdownRenderer from './components/MarkdownRenderer.tsx';
function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <div>사이트 만들기 성공!</div>
        <MarkdownRenderer/>
      </header>
    </div>
  );
}

export default App;
