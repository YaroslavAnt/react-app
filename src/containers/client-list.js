import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'

class ClientList extends React.Component {
    showList(){
        return this.props.clients.map((client)=>{
            return(
                <li onClick={() => this.props.select (client)}>
                    <img src={client.general.avatar} alt={client.general.avatar} />
                    <h3>{client.general.firstName} {client.general.lastName}</h3>
                    <p>{client.job.company},<br /> {client.job.title}</p>
                </li>
            );
        });
    }
	render(){
		return(
            <ul>
                {this.showList()}
            </ul>
        );
	}
};

function mapStateToProps (state){
    return {
        clients: state.clients
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps) (ClientList);