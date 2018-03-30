import React from 'react';
import './app.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from '../home/home';
import PartList from '../part/partList';
import About from '../about/about';
import Contact from '../contact/contact';
import SellPart from '../sellpart/sellpart';
import Login from '../login/login';


const App = () => (
    <Router>
        <div className='mainContainer'>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/partresults' component={PartList}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/sellpart' component={SellPart}/>
            <Route path='/login' component={Login}/>
            <Footer/>  
        </div>
    </Router>    
);

export default App;
