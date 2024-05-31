import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import Expenses from './pages/expenses/expenses.jsx';
import Details from './pages/details/details.jsx';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Routes>
        {/* <Route path="/" element={<Navigate to="/expenses" />} /> */}
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/details" element={<Details />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
