import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((expense) => {
			return <ExpenseListItem {...expense} key={expense.id}/>
		})}
		{props.expenses.length}
	</div>
)
const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
}

// ConnectedExpenseList below vv
export default connect(mapStateToProps)(ExpenseList);