import './App.css';
import { Header } from './components/Header';
import { NetCalories } from './components/NetCalories';
import { CaloriesInTake } from './components/CaloriesIntake';
import { MealEntries } from './components/MealEntries';
import { AddMeal } from './components/AddMeal';

import { GlobalProvider } from './context/GlobalContext';
import { Camera } from './components/Camera';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <NetCalories />
        <CaloriesInTake />
        <MealEntries />
        <AddMeal />
        <Camera />
      </div>
    </GlobalProvider>
  );
}

export default App;
