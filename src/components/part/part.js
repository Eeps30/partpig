import React from 'react';
import ImageGallery from './imageGallery/imageGallery';
import PartInfo from './partInfo/partInfo';
import './part.css'

const Part = (props) => {
    
    return (
        <div className="part">
            <ImageGallery showList={false} mainImage = {props.partInfo.url[0]} />
            <PartInfo partInfo={props.partInfo} isDetails={false}/>
        </div> 
    );
}

export default Part;