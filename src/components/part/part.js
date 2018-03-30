import React from 'react';
import ImageGallery from './imageGallery';
import PartInfo from './partInfo';
import './part.css'

const Part = (props) => {
    
    return (
        <div className="part">
            <ImageGallery showList={false} mainImage = {props.partInfo.images[0]} />
            <PartInfo partInfo={props.partInfo}/>
        </div> 
    );
}

export default Part;