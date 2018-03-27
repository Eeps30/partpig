import React from 'react';
import ImageGallery from './imageGallery';
import '../assets/css/app.css';

const App = () => (
    <div className='mainContainer'>                    
        <h1>Part Pig</h1>
        <ImageGallery showList={true} mainImage ='part1/subaruWheelsMain1.jpg' imagesList = {['part1/subaruWheelsMain1.jpg','part1/subaruWheels2.jpg','part1/subaruWheels3.jpg','part1/subaruWheels4.jpg']} />       
    </div>
);

export default App;
