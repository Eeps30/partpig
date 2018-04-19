import React, {Component} from 'react';
import './activeParts.css';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';
import UpdatePartStatus from "./updatePartStatus"


class ActiveParts extends Component {
        
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
            if(item.status === "available"){
            let id = item.id;
            let status = item.status;
            return (
                // <Link key={index} to={"/partdetails/" + item.id+'/true'}>  
                <div key={index} className="singlePart">
                    <img className="mainImage" src={item.images}></img>
                    <div className="listingId">{item.id}</div>
                    <div className="partNumber">{item.part_number}</div>
                    <div className="brand"> {item.brand} </div>
                    <div className="partName">{item.part_name}</div>
                    <div className="fitment"> {item.make} {item.model} {item.year}</div>
                    <div className="price">${parseFloat(item.price_usd)}</div>
                    <div className="statusUpdateContainer">
                    <Link key={index} to={"/partdetails/" + item.id+'/true'}><button className="button-link editPart">Edit Part</button></Link> 
                    <UpdatePartStatus id = {id} status = {status}/></div>       
                </div>         
                 );
            } else {
                return
            }                    
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

export default ActiveParts