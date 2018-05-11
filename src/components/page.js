import React from 'react';
import ClientList from '../containers/client-list';
import Details from '../containers/details';
import './page.css'

const Page = () =>(  
  <div className="wrapper">
    <ClientList />
    <Details />
  </div>
);

export default Page;
