import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 923
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses)
})

test('should add an expense', () => {
	const expense = {
		id: 109,
		description: 'Banana bread',
		note: 'tastes like banana',
		amount: 4999,
		createdAt: 200000
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense	
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
	const amount = 20988;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			amount
		}	
	}
	const state = expensesReducer(expenses, action)
	expect(state[2].amount).toBe(amount)
})

test('should not edit an expense if id not found', () => {
	const amount = 20988;
	const action = {
		type: 'EDIT_EXPENSE',
		id: 78363,
		updates: {
			amount
		}
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})