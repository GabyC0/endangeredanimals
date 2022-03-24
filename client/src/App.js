import './App.css';
import Animals from './components/Animals';
import Sightings from './components/Sightings';
//import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <h1>Animal Crossing</h1>
      <p>Share animal information!</p>
      <Animals />
      <Sightings/>
    </div>
  );
}

export default App;
