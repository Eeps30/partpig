import React, { Component } from 'react';
import './imageUploader.css'
 
class ImageUpload extends Component {
    constructor(props) {
      super(props);      
    }
  
    render() {
        
      let {imagePreviewUrl} = this.props;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className="imgThumb" src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
      return (
        <div className="previewComponent">
        
        <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.props.handleImageChange(e)} />
        <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }

export default ImageUpload;
