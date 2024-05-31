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
        <Route path='/expense'><Expenses expenses ={expenses} setExpenses={setExpenses} budget = {budget}/></Route>
        <Route path='/'><Main budget ={budget} setBudget={setBudget} expense = {expenses}/></Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
