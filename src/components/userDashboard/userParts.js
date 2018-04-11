import React, {Component} from 'react';
import './userparts.css';
import {Link} from 'react-router-dom';
import Loading from '../loading/loading';
import axios from 'axios';

    // let total = 0;
    // let list = <h1 className='emptyMessage'>You don't have any item added to the cart</h1>;
    // let checkoutButton = <Link  onClick={e => e.preventDefault()} className='disabled' to={"/checkout"}>Proceed to checkout</Link>;

    // if(props.cartParts.length > 0){
    //     list = props.cartParts.map(function(item,index){
    //         total += item.price;
    //         return ( 
    //             <div key={index} className='cartPart'> 
    //                   <Part isCart={true} removePart={props.removePart} imageClass='imageCartContainer' infoClass='productCart' partInfo={item} filters={props.filters}/>  
    //             </div>
    //         )   
    //     }); 
    //     checkoutButton = <Link className='button-link' to={"/checkout"}>Proceed to checkout</Link>;
    // }

class UserParts extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            partInfo:{},
            isLoading: false,  
            seller_id: 2          
        }
    }

    componentDidMount(){
        // const id = this.props.match.params.id;
        const seller_id = this.state.seller_id;
        const url = 'http://localhost:8000/teampartpig/src/assets/php/allPartByUser.php';
        const params = {seller_id};      
        axios.get(url,{params}).then(resp=>{
                console.log('result is: ', resp);                
                this.setState({
                    partInfo:resp.data.data,
                    isLoading: true           
                }); 
            }).catch(err => {
                console.log('error is: ', err);
            }
        ); 
    } 

        render(){

        if (!this.state.isLoading) {
            return (
                <div>                    
                    <Loading />
                </div>
            );
        }
        let part = this.state.partInfo[0];
        console.log("part is", part)
            return ( 
                <div key={part.title} className='singlePart'>                  
                    <h1>{part.title}</h1>                                      
                </div>
            )           
    }
}

export default UserParts