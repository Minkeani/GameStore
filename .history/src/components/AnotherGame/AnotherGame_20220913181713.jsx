import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import './AnotherGame.css'
import uniqid from 'uniqid'
import GameItem from '../GameItem/GameItem';

const AnotherGame = () => {

    const games = useSelector(state => state.cart.itemsInCart);

    

    return (
      <div className="swiper-container">
        <Swiper
        slidesPerView={3}
        spaceBetween={15}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
      {games.map(game => (
          <SwiperSlide className="swiper-item"><GameItem game={game} key={uniqid()} /></SwiperSlide>
      ))}  
    </Swiper>
    </div>
    );
}

export default AnotherGame;
