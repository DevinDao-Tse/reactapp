
import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'


const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((v) => (
        <ExpenseItem
          key={v.id}
          // title={v.title}
          // amount={v.amount}
          // date={v.date}
          {...v} />
      ))}
    </ul>
  )


}

export default ExpensesList;