import React, {Component} from 'react';
import './userHistory.css';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';


class UserHistory extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            // partInfo:{},
            // isLoading: false,  
            // seller_id: 2          
        }
    }

    // componentDidMount(){
    //     // const id = this.props.match.params.id;
    //     const seller_id = this.state.seller_id;
    //     const url = 'http://localhost:8000/teampartpig/src/assets/php/allPartByUser.php';
    //     const params = {seller_id};      
    //     axios.get(url,{params}).then(resp=>{
    //             console.log('result is: ', resp);                
    //             this.setState({
    //                 partInfo:resp.data.data,
    //                 isLoading: true           
    //             }); 
    //         }).catch(err => {
    //             console.log('error is: ', err);
    //         }
    //     ); 
    // } 

        render(){

        // if (!this.state.isLoading) {
        //     return (
        //         <div>                    
        //             <Loading />
        //         </div>
        //     );
        // }

        // let part = this.state.partInfo;
        // const list = part.map((item,index)=>{
        //     console.log("part is", item);
        //     return  (
        //         <Link key={index} to={"/partdetails/" + item.id}>  
        //             <div key={index} className="singlePart">
        //                 <img src={item.images}></img>
        //                 <div className="brand"> {item.brand} </div> <div className="partNumber">P/N: {item.partNumber}</div>
        //                 <div className="productTitle"><p>{item.title}</p></div>
        //                 <div className="yearMakeModel"> {item.make} {item.model} {item.year}</div>
        //                 <div className="price">${item.price}</div>           
        //              </div>
        //         </Link>        
        //              );
        
        // }); 
        
        return  (
            <div className="userPartsContainer">     
                <div className="userPartsList">
                    <h2>Your History</h2>
                </div>
            </div>     
        );
                    
    }
}

export default UserHistory