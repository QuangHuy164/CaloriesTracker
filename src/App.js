import './App.css';
import { Header } from './components/Header';
import { NetCalories } from './components/NetCalories';
import { CaloriesInTake } from './components/CaloriesIntake';
import { MealEntries } from './components/MealEntries';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <NetCalories />
        <CaloriesInTake />
        <MealEntries />
      </div>
    </div>
  );
}

export default App;
