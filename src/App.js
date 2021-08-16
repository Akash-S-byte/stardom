import './App.css';
import prostars from './resources/prostars.json'
import Table from './components/Table'
function App() {
 
  
  return (
    <div className="App">
      <Table stars={prostars}/>
    </div>
  );
}

export default App;
