import { useEffect, useState } from "react";

    export default function Main ({budget,setBudget,expenses, setExpenses}) {

        const [inputBudget,setInputBudget] = useState('');
        useEffect(() => {
            const fetchBudgetAndExpense = async() => {
                try {
                    const budgetResponse = await fetch("http://localhost:8080/weathwise/budget");
                    const expenseResponse = await fetch("http://localhost:8080/weathwise/expenses");
                    if (!budgetResponse.ok || !expenseResponse.ok){
                        throw new Error("network error")
                    }
                    const budgetData = await budgetResponse.json();
                    const expensesData = await expenseResponse.json();
                    const totalBudget = budgetData.reduce((sum,item)=> sum+item.budget,0);
                    const totalExpenses = expensesData.reduce((sum,item)=> sum+item.amount,0);
                    setBudget(totalBudget);
                    setExpenses(totalExpenses);
                    console.log(totalExpenses);
                }
                catch (error) {
                    console.error("error fetching data", error);
                }

            };
            fetchBudgetAndExpense();
        }, [setBudget,setExpenses]);

        const calculatePercentage = () => {
            if (budget === 0) {
                return 0;
            } 
            console.log((expenses/budget)*100);
            return (expenses/budget) * 100; 
        }
 
    
        const handleBudget = async (event) => {
            event.preventDefault();
            const newBudget = parseFloat(inputBudget)
            setBudget((previousBudget) => parseFloat(previousBudget + newBudget));
            setInputBudget('');
            console.log(expenses);
            const data = {budget:newBudget,data:new Date().toISOString()};
            try {
                const response = await fetch ("http://localhost:8080/weathwise/budget",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)});
                if(!response.ok){
                    throw new Error("network error")
                }
                const responseData = await response.json();
                console.log(responseData);
            }
            catch(error) {
                console.error("error:", error);
            }
        }
        const percentage = calculatePercentage();
        const greenHeight = Math.min(percentage,50);
        const orangeHeight = Math.min(Math.max(percentage-50,0),30);
        const redHeight = Math.min(Math.max(percentage-80,0),20);
           
        console.log(greenHeight);
   
        return (
    
            <>
            <h1 className='header-main'>Monthly Tracker</h1>
            <form action="submit" className='form'onSubmit={handleBudget}>
                <button className='form__button'>Add Budget</button>
                <input type="number" className='form__input' value={inputBudget} onChange={(e)=> setInputBudget(e.target.value)} placeholder="$1,500.00"/>
            </form>
            <div>
                <h2>Budget: ${budget}</h2>
            
                <div style={{border:"1px solid black", height:"200px", width:"50px", position: "relative"}}>

                {greenHeight>0 && (<div  style={{height:`${greenHeight}%`, backgroundColor: "green", width:"100%", bottom: 0, position: "absolute"}}></div>)}

                {orangeHeight>0 && (<div style={{height:`${orangeHeight}%`, backgroundColor:"orange",width:'100%', bottom:`${greenHeight}%`, position:"absolute"}}></div>)}

                {redHeight>0 && (<div style={{height:`${redHeight}%`, backgroundColor:"red",width:'100%', bottom:`${greenHeight+orangeHeight}%`, position:"absolute"}}></div>)}
            </div>
            <h2>Expenses: ${expenses}</h2>
            </div>
            
            </>
        )
    }



