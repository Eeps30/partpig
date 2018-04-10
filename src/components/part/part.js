import React from 'react';
import ImageGallery from './imageGallery/imageGallery';
import PartInfo from './partInfo/partInfo';
import {Link} from 'react-router-dom';
import './part.css'

const Part = (props) => {
    
    let gallery = <ImageGallery imageClass={props.imageClass} showList={false} mainImage = {props.partInfo.images[0]} />;
    if(props.isCart){
        gallery = ( 
            <Link to={"/partdetails/" + props.partInfo.part_id + '/' + JSON.stringify(props.filters)}>  
                <ImageGallery imageClass={props.imageClass} showList={false} mainImage = {props.partInfo.images[0]} />
            </Link>  
        );
    }
    return (
        <div className="part">
            {gallery} 
            <PartInfo isCart={props.isCart} removePart={props.removePart} infoClass={props.infoClass} partInfo={props.partInfo} isDetails={false}/>
        </div> 
    );
}

export default Part;