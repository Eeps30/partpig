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
import UserDashboard from '../userDashboard/userDashboard';


class App extends Component{

    constructor(props){
        super(props);     
        this.state = {
            cartParts: []
        }   

        this.addPart = this.addPart.bind(this);
        this.removePart = this.removePart.bind(this);
        this.saveFilters = this.saveFilters.bind(this);
        this.setUserData = this.setUserData.bind(this);
        this.filters = [];
        this.user = '';
    }

    setUserData(data){
        this.user=data[0].user_name;
    }

    containsObject(obj, list) {        
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }    
        return false;
    }

    addPart(partInfo){
        const partList = [...this.state.cartParts];
        if(!this.containsObject(partInfo,partList)){
             //Show a message to confirm we add the part to the cart
            const cartMessage = document.getElementsByClassName('cartMessageContainer');
            cartMessage[0].classList.add("show_block");
            partList.push(partInfo) 
            const cartCount = document.getElementsByClassName('cartCount');
            cartCount[0].textContent = partList.length;
            setTimeout(()=>{
                //hide the message that confirm we add a part to the cart
                const cartMessage = document.getElementsByClassName('cartMessageContainer');
                if(cartMessage.length > 0){
                    cartMessage[0].classList.remove("show_block");
                }
            },5000);
            this.setState({
                cartParts: partList
            });
        }
    }

    removePart(partInfo){
        const partList = [...this.state.cartParts];
        const index = partList.indexOf(partInfo);
        partList.splice(index,1);       
        const cartCount = document.getElementsByClassName('cartCount');
        cartCount[0].textContent = partList.length;
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
                    <Route exact path='/partresults' render={props => <PartList cartParts={this.state.cartParts} saveFilters={this.saveFilters}  addCart={this.addPart} {...props}/>} />
                    <Route exact path='/partresults/:filters' render={props => <PartList cartParts={this.state.cartParts} saveFilters={this.saveFilters}  addCart={this.addPart} {...props}/>} />
                    <Route path='/partresults/:make/:model/:year' render={props => <PartList cartParts={this.state.cartParts} saveFilters={this.saveFilters}  addCart={this.addPart} {...props}/>} />                    
                    <Route path='/partdetails/:id/:fromDashboard' render={props => <PartDetails filters={this.filters} cartParts={this.state.cartParts} addCart={this.addPart} {...props}/>} />                    
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/contactSeller' component={ContactSeller}/>
                    <Route path='/cart' render={props => <Cart cartParts={this.state.cartParts} removePart={this.removePart} filters={this.filters} {...props}/>}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/sellpart' component={SellPartForm}/>
                    <Route path='/login' render={props => <Login setUserData={this.setUserData} {...props}/>}/>
                    <Route path='/listingsuccess' component={ListingSuccess}/>
                    <Route path='/userdashboard' component={UserDashboard}/>
                    {/* <Footer/>   */}
                </div>
            </Router>  
        );
    }  
}

export default App;
