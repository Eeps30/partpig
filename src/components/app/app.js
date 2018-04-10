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
import SellPartForm from '../sellpart/sellPartForm';
import Login from '../login/login';
import Search from '../searchpage/search';
import Cart from '../cart/cart';
import Checkout from '../checkout/checkout';
import ListingSuccess from '../listingSuccess/listingSuccess';


class App extends Component{

    constructor(props){
        super(props);     
        this.state = {
            cartParts: []
        }   

        this.addPart = this.addPart.bind(this);
        this.removePart = this.removePart.bind(this);
        this.saveFilters = this.saveFilters.bind(this);
        this.filters = [];
    }

    addPart(partInfo){
        const partList = [...this.state.cartParts];
        partList.indexOf(partInfo) === -1 ? partList.push(partInfo) : '';
        this.setState({
            cartParts: partList
        });
    }

    removePart(partInfo){
        const partList = [...this.state.cartParts];
        const index = partList.indexOf(partInfo);
        partList.splice(index,1);
        this.setState({
            cartParts: partList
        });
    }

    saveFilters(filters){
        this.filters = filters;
    }

    render(){
        return (
            <Router>
                <div className='mainContainer'>
                    <Header/>            
                    <Route exact path='/' component={Search}/>
                    <Route exact path='/partresults' render={props => <PartList saveFilters={this.saveFilters} {...props}/>} />
                    <Route exact path='/partresults/:filters' render={props => <PartList saveFilters={this.saveFilters} {...props}/>} />
                    <Route path='/partresults/:make/:model/:year' render={props => <PartList saveFilters={this.saveFilters} {...props}/>} />                    
                    <Route path='/partdetails/:id/:filters' render={props => <PartDetails addCart={this.addPart} {...props}/>} />
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/contactSeller' component={ContactSeller}/>
                    <Route path='/cart' render={props => <Cart cartParts={this.state.cartParts} removePart={this.removePart} filters={this.filters} {...props}/>}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/sellpart' component={SellPartForm}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/listingsuccess' component={ListingSuccess}/>
                    <Footer/>  
                </div>
            </Router>  
        );
    }  
}

export default App;
