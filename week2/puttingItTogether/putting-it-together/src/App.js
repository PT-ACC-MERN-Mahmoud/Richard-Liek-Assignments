import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        name={"Doe, Jane"}
        age={45}
        hairColor={"black"}
        />
      <PersonCard 
        name={"Smith, John"}
        age={88}
        hairColor={"Brown"}
        />
    </div>
  );
}

export default App;
