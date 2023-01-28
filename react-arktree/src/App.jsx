import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Calculator from "../src/pages/Calculator.js";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
  );
}

export default App;
