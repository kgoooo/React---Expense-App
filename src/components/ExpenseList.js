import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length ===0 ? (
				<p>Currently no expenses.</p>
			) : (
				props.expenses.map((expense) => {
					return <ExpenseListItem {...expense} key={expense.id}/>
				})
			)
		}
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