import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up removeExpense action object', () => {
	const action = removeExpense({ id: 'abc123'})
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: 'abc123'
	})
})

test('should set up the edit expense object', () => {
	const action = editExpense('abc123', {description: 'Cookies'})
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'abc123',
		updates: {
			description: 'Cookies'
		}
	})
})

test('should set up addExpense action object with provided values', () => {
	const expenseData = {
		description: 'Cookies',
		amount: 599,
		createdAt: 1000000,
		note: 'These cookies are delish'
	}
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})

test('should set up addExpense action object with default values', () => {
	const action = addExpense()
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense:{
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	})
})