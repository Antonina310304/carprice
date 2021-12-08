import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);
const Timeline = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <Swiper
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      pagination={{ el: paginationRef.current, renderBullet }}
      paginationbulletrender={(swiper, index, className) => {
        const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        (swiper.params.navigation.nextEl = navigationNextRef.current),
          (swiper.params.navigation.el = paginationRef.current);
      }}
      direction={'vertical'}
    >
      <SwiperSlide className="swiper-bg-1" data-year={'2012'}>
        <div className="swiper-slide-content">
          <span className="timeline-year">2011</span>
          <h4 className="timeline-title">Our nice super title</h4>
          <p className="timeline-text">
            Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore
            magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-bg-2" data-year={'2014'}>
        <div className="swiper-slide-content">
          <span className="timeline-year">2012</span>
          <h4 className="timeline-title">Our nice super title</h4>
          <p className="timeline-text">
            Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore
            magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </SwiperSlide>
      <div ref={navigationPrevRef} className="swiper-button-prev">
        <p>2021</p>
      </div>
      <div ref={navigationNextRef} className="swiper-button-next">
        <p>2020</p>
      </div>
      <div ref={paginationRef} className="swiper-pagination"></div>
    </Swiper>
  );
};
export default Timeline;
