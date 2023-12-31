import Carousel from 'react-bootstrap/Carousel';
import firstSlideImg from '../assets/slider/01.jpg'
import secondSlideImg from '../assets/slider/02.jpeg'
import thirdSlideImg from '../assets/slider/04.jpeg'
import fourdSlideImg from '../assets/slider/01.jpg'

function CarouselRb() {

  const slides = [firstSlideImg, secondSlideImg, thirdSlideImg, fourdSlideImg]
  return (
    <Carousel fade className="w-100">
      {/* FIRST SLIDE */}
      <Carousel.Item interval={4000} className="">
        <div className='w-100 p-5 slide text-light'
          style={{
            backgroundImage: `linear-gradient(290deg, rgba(30, 30, 30, 0.4) 50%, rgba(0, 0, 0, .9) 50%), url(${firstSlideImg})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            overflow: 'hidden',
            minWidth: '100%'
          }}>
          <h3 className='carousel-title animate__animated animate__zoomIn animate__delay-1s fw-bold'>SEGURYGUARDIA</h3>
          <p className='p1 fs-2 fw-normal animate__animated animate__fadeIn animate__delay-2s animate__slow'>Experiencia y conocimiento</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;
