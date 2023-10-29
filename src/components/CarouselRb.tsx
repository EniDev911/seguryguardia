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
            minHeight: '100%',
            minWidth: '100%'
          }}>
          <h3 className='carousel-title animate__animated animate__zoomIn animate__delay-1s fw-bold'>SEGURYGUARDIA</h3>
          <p className='p1 fs-2 fw-normal animate__animated animate__fadeIn animate__delay-2s animate__slow'>Experiencia y conocimiento</p>
        </div>
      </Carousel.Item>
      {/* SECOND SLIDE */}
      <Carousel.Item interval={4000}>
        <div className="w-100 slide"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignContent: 'center',
            padding: '0 0 80px 0',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .5)), url(${secondSlideImg})`,
            backgroundPosition: 'center center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}>
          <h3 className='text-center carousel-title animate__animated animate__fadeIn animate__delay-1s text-gray fw-bold rounded'
            style={{
              backdropFilter: "blur(10px)",
              margin: "0 auto",
            }}>LIDERES EN SOLUCIONES</h3>
          <p className='p1 text-center fs-2 fs-bold fst-italic animate__animated animate__fadeIn text-gray animate__delay-2s animate__slow rounded' style={{
            backdropFilter: "blur(10px)",
            display: "inline",
            margin: "0 auto"
          }}>Profesionales a su servicio, Experiencia y Liderazgo en la Ruta.</p>
        </div>
      </Carousel.Item>
      {/* THRID SLIDE */}
      <Carousel.Item interval={4000}>
        <div className="w-100 slide" style={{
          display: 'flex',
          padding: '80px 0 0 0',
          flexDirection: 'column',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${thirdSlideImg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <h3 className='carousel-title text-center animate__animated animate__fadeIn animate__delay-1s text-gray fw-bold rounded' style={{
            backdropFilter: "blur(10px)",
            margin: "0 auto",
          }}>COBERTURA NACIONAL</h3>
          <p className='p1 text-center fs-2 fs-bold fst-italic animate__animated animate__fadeIn text-gray animate__delay-2s animate__slow rounded' style={{
            backdropFilter: "blur(10px)",
            margin: '0 auto'
          }}>Transportamos su Carga Terrestre a lo largo de Nuestro País.</p>
        </div>
      </Carousel.Item>
      {/*FOUR SLIDE*/}
      <Carousel.Item interval={4000}>
        <div className="w-100 slide" style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 0 60px 0',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${fourdSlideImg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <h3 className='carousel-title p-2 bg-warning bg-gradient text-dark animate__animated animate__zoomIn animate__delay-1s fw-bold text-gray' style={{
            backdropFilter: "blur(10px)",
            margin: '0 auto'
          }}>ASIDUCAM</h3>
          <p className='p1 text-center fs-2 fs-bold fst-italic animate__animated animate__fadeIn text-gray animate__delay-2s animate__slow rounded' style={{
            backdropFilter: "blur(10px)",
            margin: '0 auto'
          }}>Experiencia y calidad a su disposición.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;
