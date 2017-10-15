import moment from 'moment';
import { 
	setTextFilter, 
	sortByDate, 
	sortByAmount, 
	setStartDate, 
	setEndDate 
} from '../../actions/filters';

test('should set up setStartDate action object', () => {
	const action = setStartDate(moment(0))
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
});

test('should set up setEndDate action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
});

test('should set up sortByDate action object', () => {
	const action = sortByDate()
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	})
});

test('should set up sortByAmount action object', () => {
	const action = sortByAmount()
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	})
})

test('should set up setTextFilter action object with passed in values', () => {
	const text = 'apples'
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	})
});

test('should set up setTextFilter action object with default values', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''		
	})
})
