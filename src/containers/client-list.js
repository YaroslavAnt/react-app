import React from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';

class ClientList extends React.Component {
    showList(){
        return this.props.clients.map((client)=>{
            console.log(client.general.avatar)
            return(
                <li >
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

export default connect(mapStateToProps) (ClientList);