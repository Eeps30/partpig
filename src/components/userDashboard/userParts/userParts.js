import React, {Component} from 'react';
import './userParts.css';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';


class UserParts extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            partInfo:{},
            isLoading: false,  
            seller_id: props.userId          
        }
    }

    componentDidMount(){
        // const id = this.props.match.params.id;
        const seller_id = this.state.seller_id;
        const url = 'http://localhost:8000/teampartpig/src/assets/php/allPartBySeller.php';
        const params = {seller_id};      
        axios.get(url,{params}).then(resp=>{               
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

        let part = this.state.partInfo;
        const list = part.map((item,index)=>{
            return  (
                <Link key={index} to={"/partdetails/" + item.id+'/true'}>  
                    <div key={index} className="singlePart">
                        <img className="mainImage" src={item.images}></img>
                        <div className="listingId">{item.id}</div>
                        <div className="partNumber">{item.partNumber}</div>
                        <div className="brand"> {item.brand} </div>
                        <div className="partName">{item.title}</div>
                        <div className="fitment"> {item.make} {item.model} {item.year}</div>
                        <div className="price">${parseFloat(item.price)}</div>
                        <button className='removeListing' onClick={()=>removeListing()}>Remove Listing</button>           
                     </div>
                </Link>        
                     );
        
        }); 
        
        return  (
            <div className="userPartsContainer"> 
            <h2>Your active listings</h2>    
                <div className="userPartsList">
                    <div className="listingColumns">
                        <div className="mainImage">Main Image</div>
                        <div className="listingId">Listing Id</div>
                        <div className="partNumber">Part Number</div>
                        <div className="brand">Brand</div>
                        <div className="partName">Part Name</div>
                        <div className="fitment">Fitment</div>
                        <div className="price">Price</div>
                    </div>
                    {list}
                </div>
            </div>        
        );
                    
    }
}

export default UserParts