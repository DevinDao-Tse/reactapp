import react, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'

export default function Expenses(props){
    const data = props.expenses
    
    const [filterYear, setFilterYear] = useState('2020')
    const filterChangeHandler = (year)=>{
        console.log(year)
        setFilterYear(year)
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onFilterData = {filterChangeHandler}/>
            <div>
            {data.map((v)=>(
                <ExpenseItem
                    key = {v.id}
                    title={v.title}
                    amount={v.amount}
                    date={v.date}/>
            ))}
            </div>
        </Card>
        
    )
}