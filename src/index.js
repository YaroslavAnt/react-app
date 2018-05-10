import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers'
import Page from './components/page'

const store = createStore(allReducers);


const search = document.querySelector('#search');
search.addEventListener('keyup', function(){
	console.log(this.value)
})



ReactDOM.render(
  <Provider store={store}>
	  <Page />
  </Provider>,
	document.getElementById('root')
)