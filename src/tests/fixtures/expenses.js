import moment from 'moment';


export default [{
	id: 1,
	description: 'Coffee',
	note: 'hot',
	amount: 300,
	createdAt: 0
}, {
	id: 2,
	description: 'Pancakes',
	note: 'hot',
	amount: 1600,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: 3,
	description: 'Cookies',
	note: 'cold',
	amount: 999,
	createdAt: moment(0).add(4, 'days').valueOf()
}]