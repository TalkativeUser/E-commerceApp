import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import ParticlesBackground from '../Component/particlesBackground';

export default function HomeSlider() {


  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows:false
      };


  return <>

  
  <div>

       
        <Slider {...settings}>
          <div>
           <img style={{width:'100%',height:'400px'}} src={require('../images/blog-img-1.jpeg')} alt="slider" />
          </div>
          <div>
          <img style={{width:'100%',height:'400px'}} src={require('../images/slider-image-1.jpeg')} alt="slider" />
          </div>
          <div>
          <img style={{width:'100%',height:'400px'}} src={require('../images/slider-image-2.jpeg')} alt="slider" />
          </div>
          <div>
          <img style={{width:'100%',height:'400px'}} src={require('../images/slider-image-3.jpeg')} alt="slider" />
          </div>
          <div>
          <img style={{width:'100%',height:'400px'}} src={require('../images/blog-img-2.jpeg')} alt="slider" />
          </div>
         
        </Slider>
      </div>
  
     
  
  
  
  
  </>
}
