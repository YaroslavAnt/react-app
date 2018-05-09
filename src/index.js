import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import {createStore} from 'redux'

// function playlist(state=[]){
//     return state;
// }

// const store = createStore(playlist)

const obj = [
  {name:'john'},
	{name:'bob'},
	{name:'bil'},
	{name:'jack'},
]

const search = document.querySelector('#search');
search.addEventListener('keyup', function(){
	console.log(this.value)
})

class List extends React.Component {
	render(){
		return(
      <ul>
        {obj.map(function(el){
            return <li> my name is {el.name} </li>
          })}
      </ul>
    );
	}
};

ReactDOM.render(    
	<List />,
	document.getElementById('root')
)