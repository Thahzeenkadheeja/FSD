import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sampleuse from './components/Sampleuse';
import CardGet from './components/CardGet';

function App() {
  return (
    <div className="App">
  
      

      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/sin' element={<Signup/>}/>
        <Route path='/sb' element={<StateBasics/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/l' element={<Listmap/>}/>
        <Route path='/a' element={<Api/>}/>
        <Route path='/s' element={<Sampleuse/>}/>
        <Route path='/cg' element={<CardGet/>}/>

      
      </Routes>
      
      
    
    </div>
  );
}

export default App;
