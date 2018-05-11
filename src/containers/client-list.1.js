import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectType} from '../actions/index';
import './client-list.css'


const ClientList = React.createClass({

  getInitialState: function(){
    return{}
  },
    
  showList: function(){
    console.log(this.props.select)
    return this.props.clients.map((client)=>{
      return(
        <li onClick={() => this.props.select (client)} >        
          <img src={client.general.avatar} alt={client.general.avatar} />
          <h3>{client.general.firstName} {client.general.lastName}</h3>
          <p>{client.job.company},<br /> {client.job.title}</p>
        </li>
       );
    });
	},
	
	searchClient: function(event){
    const text = event.target.value.toLowerCase();
    this.props.onFindClient(text)
    console.log('jhgjhgjgjhg')
  },
  
  
	render: function(){
    console.log( this);
		return(      
      <div className="sidebar" >        
        <input id="search" type="search" placeholder="search" onKeyUp={this.searchClient}/>
        <ul className="list">
          {this.showList()}
        </ul>
      </div>
    );
	}
});

//export to components/page.js

export default connect(
  state=>({
    clients: state.clients
  }),
  dispatch=>
    bindActionCreators({
      select: selectType,
      onFindClient: selectType,
    }, dispatch)    
  
      
)(ClientList)