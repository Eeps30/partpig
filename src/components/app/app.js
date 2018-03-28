import React from 'react';
import ImageGallery from '../image_gallery/imageGallery.js';
import './app.css';
import Loading from '../loading/loading';
import Header from '../header/header';
import Footer from '../footer/footer';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';


const App = () => (
    <div className='mainContainer'>
        <Header/>
        <Breadcrumbs/>                    
        <h1>Part Pig</h1>
        <ImageGallery showList={true} mainImage ='part1/subaruWheelsMain1.jpg' imagesList = {['part1/subaruWheelsMain1.jpg','part1/subaruWheels2.jpg','part1/subaruWheels3.jpg','part1/subaruWheels4.jpg']} />       

        <Footer/>  
    </div>
);

export default App;
