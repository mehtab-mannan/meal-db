import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About/About';
import Home from './Home';
import MealData from './MealDb/MealData';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <div className="App">
      
     

      <BrowserRouter>
        <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="mealdata" element={<MealData />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
