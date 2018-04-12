import React, {Component} from 'react';
import './partDetails.css';
import ImageGallery from '../imageGallery/imageGallery';
import PartInfo from '../partInfo/partInfo';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';

class PartDetails extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            partInfo:{},
            isLoading: false            
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const url = 'http://localhost:8000/teampartpig/src/assets/php/singleItemDetail.php';
        const params = {id};      
        axios.get(url,{params}).then(resp=>{
                console.log('result is: ', resp.data.data[0]);                
                this.setState({
                    partInfo:resp.data.data[0],
                    isLoading: true            
                }); 
            }).catch(err => {
                console.log('error is: ', err);
            }
        ); 
    } 

    render(){

        let linkBack = <Link to={"/userdashboard/" + this.props.match.params.filters}><div>Back to results</div></Link>;
        if(this.props.match.params.filters){
            linkBack = <Link to={"/partresults/" + this.props.match.params.filters}><div>Back to results</div></Link>;
        }

        if (!this.state.isLoading) {
            return (
                <div>                    
                    <Loading />
                </div>
            );
        }

        return (
            <div className="partDetails container">
                {linkBack}
                <ImageGallery imageClass='imageDetailsContainer' showList={true} mainImage = {this.state.partInfo.images[0]} imageList = {this.state.partInfo.images} />
                <PartInfo cartParts={this.props.cartParts} history={this.props.history} infoClass='productDetailsContainer' partInfo={this.state.partInfo} addCart={this.props.addCart} isDetails={true} filters={this.props.match.params.filters}/>
            </div> 
        );
    }
}

export default PartDetails;