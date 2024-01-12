import React from 'react'
import ExpenseInputForm from '../../expenseTracker'

type Props = {}

const ExpensesPage = (props: Props) => {
  return (
    <div className=" flex pt-24">
      <ExpenseInputForm />
    </div>
  )
}

export default ExpensesPage
