import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import './AnotherGame.css'
import uniqid from 'uniqid'
import GameItem from '../GameItem/GameItem';

const AnotherGame = () => {

    const games = useSelector(state => state.cart.itemsInCart);

    

    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
          <SwiperSlide><GameItem game={game} key={uniqid()} /></SwiperSlide>
      ))}  
    </Swiper>
    );
}

export default AnotherGame;
