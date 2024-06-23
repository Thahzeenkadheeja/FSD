import './App.css';
import Data from './Components/Data';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import View from './Components/View';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/v" element={<View/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
