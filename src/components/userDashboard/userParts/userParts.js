import React, {Component} from 'react';
import './userParts.css';
import {Link} from 'react-router-dom';
import Loading from '../../tools/loading/loading';
import axios from 'axios';
import UpdatePartStatus from "./updatePartStatus"


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
                this.props.history.push('/error');                
            }
        ); 
    } 

    render(){
        if (!this.state.isLoading) {
            return (
                <div className='container'>
                    <Loading />
                </div>
            );
        }

        let part = this.state.partInfo;
        const list = part.map((item,index)=>{
            if(item.status === "available"){
            let id = item.id;
            let status = item.status;
            return  (
                <div key={index} className="dashboardPart">
                    <img className="mainImage alignMiddle" src={item.images}></img>
                    <div className="listingId alignMiddle">{item.id}</div>
                    <div className="partNumber alignMiddle">{item.part_number}</div>
                    <div className="brand alignMiddle"> {item.brand} </div>
                    <div className="partName alignMiddle">{item.part_name}</div>
                    <div className="fitment alignMiddle"> {item.make} {item.model} {item.year}</div>
                    <div className="price alignMiddle">${parseFloat(item.price_usd)}</div>
                    <div className="statusUpdateContainer">
                    <Link className="button-link editPart" key={index} to={"/partdetails/" + item.id+'/true'}>Edit Part</Link> 
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
                        <div className="title-mainImage">Main Image</div>
                        <div className="title-listingId">Listing Id</div>
                        <div className="title-partNumber">Part Number</div>
                        <div className="title-brand">Brand</div>
                        <div className="title-partName">Part Name</div>
                        <div className="title-fitment">Fitment</div>
                        <div className="title-price">Price</div>
                        <div className="title-status">Status</div>
                    </div>
                    {list}
                </div>
            </div>        
        );
                    
    }
}

export default UserParts