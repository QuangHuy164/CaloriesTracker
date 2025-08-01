import './App.css';
import { Header } from './components/Header';
import { NetCalories } from './components/NetCalories';
import { CaloriesInTake } from './components/CaloriesIntake';
import { MealEntries } from './components/MealEntries';
import { AddMeal } from './components/AddMeal';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <NetCalories />
        <CaloriesInTake />
        <MealEntries />
        <AddMeal />
      </div>
    </div>
  );
}

export default App;
