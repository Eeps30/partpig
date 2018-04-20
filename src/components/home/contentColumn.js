import React, { Component } from 'react';
import './home.css';


class ContentColumn extends Component{

    constructor(props){
      super(props);
      this.state = {
        blockHeight: 100/props.displaySize,
        position: 0,
        images: props.images
      }
      this.handleTimerUpdate = this.handleTimerUpdate.bind(this);
    }

    handleTimerUpdate(){
      let newPosition = this.state.position+this.props.shiftRate
      if(newPosition > this.itemHeight){
        newPosition = -1;
        var nextArray = this.state.images.slice();
        nextArray.push( nextArray.shift());
      } else {
        nextArray = this.state.images;
      }
      
      this.setState({
        position: newPosition,
        images: nextArray
      })
  
    }

    componentDidMount(){
      setInterval( this.handleTimerUpdate, 500);
      this.itemHeight = this.column.clientHeight / this.props.displaySize;
    }

    makeAllPictures(array){
      return array.map( (item, key) => this.makePicture(item, key))
    }

    makePicture(image, key){
      const styling = {
        backgroundImage: `url(/images/${image})`,
        height: this.state.blockHeight + 'vh',
      }
      return (<div className='scrollingImg' style={styling} key={key}></div>)
    }
    
    render(){
      return (
      <div className="scrollingImgColumn" ref={ element => this.column=element}>
        <div className="scrollingImgContainer" style={{color:'red', 'bottom': this.state.position + 'px'}}>
          {this.makeAllPictures(this.state.images)}
        </div>
      </div>)
    }
  }
  
  export default ContentColumn