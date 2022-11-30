import React, { useEffect, useState } from 'react'

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

const Carousel = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index: number, images: string[], next = true) => {
    
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0)
        : condition ? selectedIndex -1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 600)
  }

  useEffect(() => {
    if (props.autoPlay){
      const interval = setInterval(() =>{
        selectNewImage(selectedIndex, props.images)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [])

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  }

  const imgUrl = new URL(`../assets/slider/${selectedImage}`, import.meta.url).href


  return (
    <section className='carousel'>
      <div className="carousel__wrapper">
      <img 
        src={imgUrl} 
        alt="Image" 
        loading='lazy' 
        className={loaded? "loaded": ""} 
        onLoad={() => setLoaded(true)}/>
      {
        props.showButtons ? (
        <div className="carousel__controls">
          <button onClick={previous}>{'<'}</button>
          <button onClick={next}>{'>'}</button>
        </div>
        ) : (<></>)
      }
      </div>
    </section>
  )
};

export default Carousel;