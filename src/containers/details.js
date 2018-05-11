import React from 'react';
import {connect} from 'react-redux';
import './details.css';

class Details extends React.Component {
    
    render(){
        console.log(this)
        if(!this.props.client) {
            return <br/>
        }
        return(
        <div className="wrapp">

            <img src={this.props.client.general.avatar} alt="" />
            <div className="container">
                <h1>{this.props.client.general.firstName} {this.props.client.general.lastName} </h1>

                <h2>Job:</h2>
                <p>{this.props.client.job.title} at: <br /> <span>{this.props.client.job.company} </span> </p>

                <h3>Contact:</h3>
                <p><span>e-mail: </span> {this.props.client.contact.email} </p>
                <p><span>phone: </span> {this.props.client.contact.phone} </p>

                <h3>Adress:</h3>
                <p><span>street: </span> {this.props.client.address.street} </p>
                <p><span>city: </span> {this.props.client.address.city} </p>
                <p><span>zipCode: </span> {this.props.client.address.zipCode} </p>
                <p><span>country: </span> {this.props.client.address.country} </p>
            </div>

        </div>
        );
    }
}
function mapStateToProps(state){
    return {
        client: state.active // возвращает объект 
    };
}

export default connect(mapStateToProps) (Details); //получение данных из хранилища в компонент
//export to components/page.js
