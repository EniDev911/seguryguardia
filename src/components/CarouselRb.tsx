import Carousel from 'react-bootstrap/Carousel';
import firstSlideImg from '../assets/slider/01.jpg'
import secondSlideImg from '../assets/slider/02.jpeg'
import thirdSlideImg from '../assets/slider/04.jpeg'

function CarouselRb() {
  return (
    <Carousel fade className="w-100">
      {/* FIRST SLIDE */}
      <Carousel.Item interval={4000}>
        <div className='w-100 p-5'
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${firstSlideImg})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'scroll',
            backgroundRepeat: 'no-repeat',
            height: '96vh'
          }}>
          <h3 className='t1 text-light fw-bold'>ASIDUCAM</h3>
          <p className='p1 text-light'>Asociación Gremial de Dueños de Camiones de Coquimbo</p>
        </div>
      </Carousel.Item>
      {/* SECOND SLIDE */}
      <Carousel.Item interval={4000}>
        <div className="w-100"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'center',
            padding: '0 0 80px 80px',
            background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${secondSlideImg})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: '96vh'
          }}>
          <h3 className='t1 text-gray fw-bold'>ASIDUCAM</h3>
          <p className='p1 text-light'>Asociación Gremial de Dueños de Camiones de Coquimbo</p>
        </div>
      </Carousel.Item>
      {/* THRID SLIDE */}
      <Carousel.Item interval={4000}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '80px 80px 0 0',
          alignItems: 'end',
          flexDirection: 'column',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${thirdSlideImg})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height: '96vh'
        }}>
          <h3 className='t1 text-light'>ASIDUCAM</h3>
          <p className='p1 text-light'>Asociación Gremial de Dueños de Camiones de Coquimbo</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;
