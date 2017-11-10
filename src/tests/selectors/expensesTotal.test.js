import expenses from '../fixtures/expenses'
import expensesTotal from '../../selectors/expensesTotal';

test('should return 0 if no expenses', () => {
	const res = expensesTotal([]);
	expect(res).toBe(0)
})

test('should correctly return 1 expense', () => {
	const res = expensesTotal([expenses[0]]);
	expect(res).toBe(300)
})

test('should add expenses correctly', () => {
	const sum = expensesTotal(expenses);
	expect(sum).toEqual(2899)
})