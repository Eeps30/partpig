import React from 'react';
import PartList from '../part/partList';
import './app.css';
import Loading from '../loading/loading';
import Header from '../header/header';
import Footer from '../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';


const App = () => (
    <div className='mainContainer'>
        <Header/>
        <Breadcrumbs/>   
        <PartList /> 
        <Footer/>  
    </div>
);

export default App;
