import Carousel from 'react-bootstrap/Carousel';
import firstSlideImg from '../assets/slider/01.jpg'
import secondSlideImg from '../assets/slider/01.jpeg'
import thirdSlideImg from '../assets/slider/04.jpeg'
// import thirdSlideImg from '../assets/slider/02.jpeg'
import './carouselrb.css'

function CarouselRb() {
  return (
    <Carousel fade className="w-100">
      <Carousel.Item interval={5000}>
        <div className='w-100 p-5'
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${firstSlideImg})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          height:'96vh'
          }}>
          <h3 className='t1 text-gray'>ASIDUCAM</h3>
          <p className='p1 text-light'>La Asociación de Dueños de Camiones</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <div style={{
          background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(https://images.pexels.com/photos/11053641/pexels-photo-11053641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize:'100% 100%',
          height:'96vh'
          }}>
          <h3>ASIDUCAM</h3>
          <p>La Asociación de Dueños de Camiones</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
         <div style={{
          backgroundImage: `url(https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height:'96vh'
          }}>
          <h3>ASIDUCAM</h3>
          <p>La Asociación de Dueños de Camiones</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;
