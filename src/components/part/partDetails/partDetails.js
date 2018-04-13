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
                if(this.props.match.params.fromDashboard=='true'){
                    this.oldPartInfo = resp.data.data[0];
                }
            }).catch(err => {
                console.log('error is: ', err);
            }
        ); 
    } 

    render(){

        let linkBack = <Link to={this.props.urlBack}><div>Back to results</div></Link>;
        if(this.props.match.params.fromDashboard == 'true'){
            linkBack = <Link to={"/userdashboard/"}><div>Back to dashboard</div></Link>;
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
                <PartInfo fromDashboard={this.props.match.params.fromDashboard} {...this.props} infoClass='productDetailsContainer' partInfo={this.state.partInfo}  isDetails={true} />
            </div> 
        );
    }
}

export default PartDetails;