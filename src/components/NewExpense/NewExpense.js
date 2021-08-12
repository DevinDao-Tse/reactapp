import React , {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

  const [editingState, setEditingState] = useState(false)

  const startEditingHandler = ()=>{
    setEditingState(true)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setEditingState(false)
  }

  const stopEditiing = ()=>{
    setEditingState(false)
  }

  return (
    <div className='new-expense'>
      {!editingState && <button onClick = {startEditingHandler}>Add New Expense</button>}
      {editingState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditiing}/>} 
    </div>
  )
}

export default NewExpense

