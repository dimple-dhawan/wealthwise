import { useState } from "react";

export default function Budget ({budget,setBudget,expenses}) {
    const [inputBudget,setInputBudget] = useState('');
    const calculatePercentage = () => {
        if (budget === 0) {
            return 0;
        }
        return (expenses/budget) * 100 
    }
    const getBackgroundColor = () => {
        const percentage = calculatePercentage();
        if (percentage <= 50) return "green";
        if (percentage > 50 && percentage <= 80) return "orange";
        return "red";        
    }

    const handleBudget = () => {
        setBudget(parseFloat(inputBudget));
        setInputBudget('')
    }

    return (

        <>
        <h1 className='header-main'>Monthly Tracker</h1>
        <form action="submit" className='form'>
            <button onClick={handleBudget} className='form__button'>Add Budget</button>
            <input type="number" className='form__input' value={inputBudget} onChange={(e)=> setInputBudget(e.target.value)} placeholder="$1,500.00"/>
        </form>
        <div>
            <h2>Budget: ${budget}</h2>
            <h2>Expenses: ${expenses}</h2>
            <div style={{width:`${calculatePercentage()}%`, backgroundColor:getBackgroundColor(),height:'100%',}}></div>
        </div>
        </>
    )
}