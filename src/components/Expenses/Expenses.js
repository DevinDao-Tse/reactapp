import react from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

export default function Expenses(props){
    const data = props.expenses
    return (
        <div className='expenses'>
            {data.map((v)=>(
                <ExpenseItem
                    key = {v.id}
                    title={v.title}
                    amount={v.amount}
                    date={v.date}/>
            ))}
        </div>
    )
}