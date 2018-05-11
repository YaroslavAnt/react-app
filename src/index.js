import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers/index'
import Page from './components/page'

const store = createStore(allReducers);



ReactDOM.render(
  <Provider store={store}>
	  <Page />
  </Provider>,
	document.getElementById('root')
)