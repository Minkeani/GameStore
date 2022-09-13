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
        className='swiper'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {games.map(game => (
          <SwiperSlide><img src={game.image} alt="" /></SwiperSlide>
      ))}  
    </Swiper>
    );
}

export default AnotherGame;
