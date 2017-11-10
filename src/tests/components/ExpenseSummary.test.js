import React from 'react';
import { shallow } from 'enzyme'
import ExpenseSummary from '../../components/ExpenseSummary'

test('should correctly render expensesSummarry with one expense', () => {
	const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={999}/>);
	expect(wrapper).toMatchSnapshot()
})

test('should correctly render expensesSummarry with multiple expenses', () => {
	const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={234999} />);
	expect(wrapper).toMatchSnapshot()
})
