import Carousel from 'react-bootstrap/Carousel';
import firstSlideImg from '../assets/slider/01.jpg'
import secondSlideImg from '../assets/slider/02.jpg'
// import thirdSlideImg from '../assets/slider/02.jpeg'

function CarouselRb() {
  return (
    <Carousel fade className="w-100">
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={firstSlideImg}
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={secondSlideImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;