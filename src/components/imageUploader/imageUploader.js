import React, { Component } from 'react';
import './imageUploader.css'
import Dropzone from 'react-dropzone'
 
class ImageUpload extends Component {

  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
    console.log(this.state.files)
  }

  render() {
     let images = this.state.files.map((item,index)=>{
       console.log(item)
      return <div className="imgThumbContainer"><img className="imgThumb" key={index} name = {item} src={item.preview}/><button className="removeImg">X</button></div>        
  });
    return (

      
      <section>
        <div className="imageUploadContainer">
          <Dropzone imgArray={this.state.files} className="dropZone" onDrop={this.onDrop.bind(this)}>
          </Dropzone>
                    {images}
        </div>
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
