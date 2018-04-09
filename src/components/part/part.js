import React from 'react';
import ImageGallery from './imageGallery/imageGallery';
import PartInfo from './partInfo/partInfo';
import './part.css'

const Part = (props) => {
    
    return (
        <div className="part">
            <ImageGallery imageClass={props.imageClass} showList={false} mainImage = {props.partInfo.images[0]} />
            <PartInfo isCart={props.isCart} removePart={props.removePart} infoClass={props.infoClass} partInfo={props.partInfo} isDetails={false}/>
        </div> 
    );
}

export default Part;