import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
	return (
		<div>
			<h1>Currently displaying { expenseCount } { expenseWord } totalling { formattedExpensesTotal }.</h1>
		</div>
	)
}

const mapStateToProps = (state) => {
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: expensesTotal(visibleExpenses)
	}
}

export default connect(mapStateToProps)(ExpenseSummary);