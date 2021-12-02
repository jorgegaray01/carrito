import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imgUno from "../../images/carrusel01.jpg";
import imgDos from "../../images/carrusel02.jpg";
import imgTres from "../../images/carrusel03.jpg";

export default function App() {
  return (
    <div style={{ display: 'block', width: 900, padding: 50, height: 600, margin: 'auto' }}>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imgUno}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>La mejor calidad</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={imgDos}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Variedad de productos</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgTres}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Durabilidad y garantía</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}