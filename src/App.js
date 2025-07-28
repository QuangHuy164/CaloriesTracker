import './App.css';
import { Header } from './components/Header';
import { NetCalories } from './components/NetCalories';
import { CaloriesInTake } from './components/CaloriesIntake';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <NetCalories />
        <CaloriesInTake />
      </div>
    </div>
  );
}

export default App;
