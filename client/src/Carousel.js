import React,{ Component } from 'react';
import { useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';


function CarouselCom(props) {

  const testSrc = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  
  const carContent = [
    {
      key: 1,
      img: testSrc,
      title: 'test1',
      content: 'test1C'
    },
    {
      key: 2,
      img: testSrc,
      title: 'test2',
      content: 'test2C'
    },
    {
      key: 3,
      img: testSrc,
      title: 'test3',
      content: 'test3C'
    }
  ]

  return (
    <div className="Carousel">
      <Carousel>
        {carContent.map( (imgData) => (
          <Carousel.Item interval={3000} key={imgData.key}>
            <img
              className="d-block w-100"
              src={imgData.img}
              alt={imgData.title}
            />
            <Carousel.Caption>
              <h3>{imgData.title}</h3>
              <p>{imgData.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselCom;