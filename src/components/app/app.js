import React from 'react';
import './app.css';
import Loading from '../loading/loading';
import Header from '../header/header';
import Footer from '../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
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


const App = () => (
    <Router>
        <div className='mainContainer'>
            <Header/>
            <div><Link to="/partresults">Part Results</Link></div>
            <div><Link to="/about">About Us</Link></div>
            <Route exact path='/' component={Home}/>
            <Route path='/partresults' component={PartList}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/sellpart' component={SellPart}/>
            <Footer/>  
        </div>
    </Router>    
);

export default App;
