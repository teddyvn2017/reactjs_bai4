import React from 'react'
import { useSwiper } from 'swiper/react';
import Left from './icon/Left'
import Right from './icon/Right'

const SwiperNavButton = () => {

  const swiper = useSwiper();

  return (
    <div className='swiper-nav-btns'>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  )
}

export default SwiperNavButton