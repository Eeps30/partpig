import React, { Component } from 'react';
import './home.css';
import ContentColumn from './contentColumn';
import Search from '../searchpage/search';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      images: props.images,
    }
  }

  randomizeArray(array){
    const sourceArray = array.slice();
    const newArray = [];
    while(sourceArray.length){
      let randomIndex = Math.floor(Math.random()*sourceArray.length);
      newArray.push( sourceArray[randomIndex]);
      sourceArray.splice(randomIndex, 1);
    }
    return newArray;
  }

  render() {
    return (
      <div className="homeMainContainer">
        <div className="scrollingBackground">
          <ContentColumn shiftRate={.7} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={.9} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={.8} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={1} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={.9} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={.7} displaySize={7} images={this.randomizeArray(this.state.images)} />
          <ContentColumn shiftRate={.8} displaySize={7} images={this.randomizeArray(this.state.images)} />
            <div className="shadow">                     
              <div id="welcomeMessage">The fastest growing car part marketplace</div>
              <Search/>
            </div>
        </div>
      </div>  
    );
  }
}

export default Home;








