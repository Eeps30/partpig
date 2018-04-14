import React, { Component } from 'react';
import './imageUploader.css'
import Dropzone from 'react-dropzone'
 
class ImageUpload extends Component {
    constructor(props) {
      super(props);      
    }

    onDrop(acceptedFiles, rejectedFiles) {
      // do stuff with files...
    }
      
    render() {
      let $imagePreview = null;
      console.log("images:", this.props.images)
        if (this.props.images.length > 0) {
          console.log("images:", this.props.images)
        $imagePreview = this.props.images.map((item, index) => {
          
          return <img key={index} className="imgThumb" src={item.imagePreviewUrl} />
        })
      } else {
        console.log('NO IMAGES');
        $imagePreview = (<div className="previewText">Please select an Image to Upload</div>);
      }
      return (
        <div className="previewComponent">
           <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.props.handleImageChange(e)} />          
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }

export default ImageUpload;
