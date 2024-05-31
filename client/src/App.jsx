import './App.css';
import Main from './pages/Main/main.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Expenses from './pages/expenses/expenses.jsx';
import { useState } from 'react';
import Details from './pages/details/details.jsx';

function App() {

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  return (
    <BrowserRouter>
     <Header />
     <Routes>
       
        <Route path="/expenses" element={<Expenses />} />
        <Route path='/' element={<Main budget ={budget} setBudget={setBudget} expenses = {expenses} setExpenses={setExpenses}/>}/>
        <Route path="/details" element={<Details />} />

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
