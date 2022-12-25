import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Card";

function App() {
  return (
    <>
      <div className="App">Card Game</div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
