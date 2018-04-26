import React, { Component } from 'react';
import './imageUploader.css'
import Dropzone from 'react-dropzone'
 
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: props.images
    };
  }

  render() {
      let imagesToUpload = this.props.images.map((item,index)=>{      
        return (<div key={index} className="imgThumbContainer">
                  <img className="imgThumb" name = {item} src={item.imagePreviewUrl}/>
                  <button onClick={this.props.deleteImage} type='button' name = {item.imagePreviewUrl} className="removeImg">X</button>
                </div>);        
      });
      return (
        <section className="imageSection">
          <div className="imageUploadContainer">
            <Dropzone imgarray={this.props.images} className="dropZone" onDrop={this.props.handleImageChange} 
              accept="image/jpeg, image/png">
                <p>Drop or Click to upload your images</p>
            </Dropzone>             
            <div className='displayImages'>
              {imagesToUpload}
            </div>            
          </div>
          <div className="help-block">{this.props.error}</div>  
        </section>
      );
    }
}


export default ImageUpload;


// constructor(props) {
//   super(props);      
// }

// onDrop(acceptedFiles, rejectedFiles) {
//   // do stuff with files...
// }
  
// render() {
//   let $imagePreview = null;
//   console.log("images:", this.props.images)
//     if (this.props.images.length > 0) {
//       console.log("images:", this.props.images)
//     $imagePreview = this.props.images.map((item, index) => {
      
//       return <img key={index} className="imgThumb" src={item.imagePreviewUrl} />
//     })
//   } else {
//     console.log('NO IMAGES');
//     $imagePreview = (<div className="previewText">Please select an Image to Upload</div>);
//   }
//   return (
//     <div className="previewComponent">
//        <Dropzone onDrop={this.onDrop.bind(this)}>
//         <p>Try dropping some files here, or click to select files to upload.</p>
//       </Dropzone>
//     <input className="fileInput" 
//         type="file" 
//         onChange={(e)=>this.props.handleImageChange(e)} />          
//       <div className="imgPreview">
//         {$imagePreview}
//       </div>
//     </div>
