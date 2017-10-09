import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'La Croix thing', amount: 3000, createdAt: 45621}))
store.dispatch(addExpense({ description: 'Buns thing', amount: 4500000, createdAt: 25721}))
store.dispatch(addExpense({ description: 'Banana Cream Pie', amount: 80000, createdAt: 35620 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

