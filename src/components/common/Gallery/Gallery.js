import React from 'react';
import Styles from './Gallery.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/icons/download.png';
import image2 from '../../../assets/icons/facebook-logo.svg';

const Gallery = () => {
  return (
    <>
      <h1 className={Styles.Gallery}>Gallery</h1>
      <div className={Styles.GalleryWrapper}>
        <Carousel autoPlay={true} showArrows={true}>
          <div className={Styles.GalleryFlex}>
            <img src={image1} alt="1" />
            <img src={image1} alt="2" />
            <img src={image1} alt="3" />
            <img src={image1} alt="4" />
          </div>
          <div className={Styles.GalleryFlex}>
            <img src={image1} alt="5" />
            <img src={image2} alt="6" />
            <img src={image1} alt="7" />
            <img src={image1} alt="8" />
          </div>
          <div className={Styles.GalleryFlex}>
            <img src={image1} alt="9" />
            <img src={image1} alt="10" />
            <img src={image2} alt="11" />
            <img src={image1} alt="12" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
