import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import Expenses from './pages/expenses/expenses.jsx';
function App() {
  return (
    <BrowserRouter>
     <Header />
     <Routes>
        {/* <Route path="/" element={<Navigate to="/expenses" />} /> */}
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
