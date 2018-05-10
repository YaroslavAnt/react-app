import {combineReducers} from 'redux';
import ClientReducers from './client';
import ActiveClient from './client-active'

const allReducers = combineReducers({
    clients: ClientReducers,
    active: ActiveClient
})

export default allReducers 