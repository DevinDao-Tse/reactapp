import react, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props){
  const data = props.expenses
  
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = (year)=>{
    console.log(year)
    setFilterYear(year)
  }

  const filterExpense = props.expenses.filter(expense=>{
      return expense.date.getFullYear().toString() === filterYear;
  })


  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter 
        selected={filterYear} 
        onFilterData = {filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpense}/>
      <ExpensesList items = {filterExpense}/>
      </Card>
    </div>
    
      
  )
}