import React from 'react';
import './partDetails.css';
import ImageGallery from '../imageGallery/imageGallery';
import PartInfo from '../partInfo/partInfo';
import {Link} from 'react-router-dom';

const PartDetails = (props) => {
        
    return (
        <div className="partDetails">
            <Link to="/partresults"><div>Back to results</div></Link>
            <ImageGallery showList={true} mainImage = {props.partInfo.images[0]} imageList = {props.partInfo.images} />
            <PartInfo partInfo={props.partInfo} isDetails={true}/>
        </div> 
    );
}

export default PartDetails;