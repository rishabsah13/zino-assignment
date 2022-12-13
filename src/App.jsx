import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';

function App() {
  return (
    <>
    <div className="App">
      Zino Tech React App
    </div>
    
      <Routes>
      <Route path='/' element={<Home/>}/>   
      </Routes>
      </>
  );
}

export default App;
