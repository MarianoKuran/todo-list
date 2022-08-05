import './App.css';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <div className='ctn-logo'>
        <h1 className='logo'>TO DO LIST</h1>
      </div>
      <div className='list-task'>
        <h2>My Tasks</h2>
        <Lista />
      </div>
    </div>
  );
}

export default App;
