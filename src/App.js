import './App.css';
import { Header } from './components/Header';
import { NetCalories } from './components/NetCalories';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <NetCalories />
      </div>
    </div>
  );
}

export default App;
