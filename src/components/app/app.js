import React, {Component} from 'react';
import './app.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import PartList from '../part/partList/partList';
import PartDetails from '../part/partDetails/partDetails';
import About from '../about/about';
import Contact from '../contact/contact';
import ContactSeller from '../contact/seller/contactSeller';
import SellPart from '../sellpart/sellpart';
import Login from '../login/login';
import Search from '../searchpage/search';
import Cart from '../cart/cart';
import Checkout from '../checkout/checkout';


class App extends Component{

    constructor(props){
        super(props);        
    }

    render(){
        return (
            <Router>
                <div className='mainContainer'>
                    <Header/>            
                    <Route exact path='/' component={Search}/>
                    <Route exact path='/partresults' component={PartList} />
                    <Route exact path='/partresults/:filters' component={PartList} />
                    <Route path='/partresults/:make/:model/:year' component={PartList} />                    
                    <Route path='/partdetails/:id/:filters' component={PartDetails}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/contactSeller' component={ContactSeller}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/sellpart' component={SellPart}/>
                    <Route path='/login' component={Login}/>
                    <Footer/>  
                </div>
            </Router>  
        );
    }  
}

export default App;
