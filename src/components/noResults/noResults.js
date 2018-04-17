import React, {Component} from 'react';
import './noResults.css';
import {Link} from 'react-router-dom';


class NoResults extends Component {
        
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
            <div className="noResultsContainer">
            <h1>No results found :(</h1> 
                <h3>We are very sad we couldn't locate the part you are searching for. 
                    <p>The Part Pig community is rapidly growing so please check back soon!</p>
                        </h3> 
                <div className="noResultsMessage"> 
                <h2>You still have options!</h2>               
                </div>
                <div className="noResultsMessage">
                    <div className="searchAgain">Search Again </div>   
                    <p></p>
                    <div className="searchAgain">Find me parts!</div>
                    <p></p>
                    <div className="searchAgain">Give us feedback</div>                     
                </div>
                
            </div>     
        );
                    
    }
}

export default NoResults