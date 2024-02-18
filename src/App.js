import './App.css';
import { NavBar } from './components/NavBar';
import {Routes,Route} from "react-router-dom"
import { Exercise } from './pages/Exercise';
import { AddExercise } from './components/AddExercise';
import { Dashboard } from './pages/Dashboard';
import { Food } from './pages/Food';
import { AddFood } from './components/AddFood';
import { Goal } from './pages/Goal';
import { AddGoal } from './components/AddGoal';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/exercise' element={<Exercise/>}/>
      <Route path='/exercise/add' element={<AddExercise/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/food/add' element={<AddFood/>}/>
      <Route path='/goal' element={<Goal/>}/>
      <Route path='/goal/add' element={<AddGoal/>}/>
     </Routes>
    </div>
    
  );
}

export default App;
