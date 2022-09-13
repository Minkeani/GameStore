import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import './AnotherGame.css'

const AnotherGame = () => {

    const games = useSelector(state => state.cart.itemsInCart);

    

    return (
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
    );
}

export default AnotherGame;
