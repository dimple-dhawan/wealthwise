import './App.css';
import Main from './pages/Main/main.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Expenses from './pages/expenses/expenses.jsx';
import { useState } from 'react';

function App() {

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  return (
    <BrowserRouter>
     <Header />
     <Routes>
        {/* <Route path="/" element={<Navigate to="/expenses" />} /> */}
        <Route path="/expenses" element={<Expenses />} />
        <Route path='/' element={<Main budget ={budget} setBudget={setBudget} expenses = {expenses} setExpenses={setExpenses}/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
