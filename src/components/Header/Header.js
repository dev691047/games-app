import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Header.css"
import pic1 from "./img/1.png";
import pic2 from "./img/2.jpg";
import pic3 from "./img/3.jpg";
import pic4 from "./img/4.jpg";
import pic5 from "./img/5.webp";

export default function Header() {
    return (
        <header>
           {/* <img src={pic1} alt="" srcset="" className='head-img'/> */}
           <Carousel className='caro'>
           <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pic4}
          alt="First slide"

        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pic5}
          alt="First slide"

        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pic1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>

        </header>
    )
}