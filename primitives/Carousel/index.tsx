/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Dots from '@primitives/Dots';
import SliderArrows from '@primitives/SliderArrows';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import {
  activeBullet, bullet, bulletsWrapper, dotWrapper, slide, wrapper,
} from './style.css';

interface ICarousel {
  data: any[];
  navigation?: boolean;
  slideTemplate: any;
  slideWith?: string;
  spaceBetween: number;
  dots?: boolean;
  [key: string]: any;
}

const Carousel: NextPage<ICarousel> = function ({
  data,
  slideTemplate,
  navigation = false,
  slideWith,
  spaceBetween,
  ...props
}) {
  const Template = useMemo(() => slideTemplate, [slideTemplate]);
  const paginationRef = React.useRef(null);
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDesktop = useMediaQuery(mediaQueryDesktop);

  const prevSlide = useCallback(() => {
    const current = swiper.activeIndex;
    swiper.slideTo(current - 1);
  }, [swiper]);

  const nextSlide = useCallback(() => {
    const current = swiper.activeIndex;
    swiper.slideTo(current + 1);
  }, [swiper]);

  return (
    <div>
      <Swiper
        className={wrapper}
        onSwiper={(sw) => setSwiper(sw)}
        pagination={{
          el: paginationRef.current || '.bulletList',
          bulletClass: bullet,
          bulletActiveClass: activeBullet,
        }}
        style={{ padding: '0 12px' }}
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={spaceBetween}
        onSlideChange={(slider) => {
          setCurrentSlide(slider.activeIndex);
        }}
      >
        {data.map((item: any, idx: number) => (
          <SwiperSlide className={slide} key={idx} style={{ width: slideWith }}>
            <Template {...props} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={bulletsWrapper}>
        {navigation && isDesktop && (
          <SliderArrows
            handlePrevSlide={prevSlide}
            handleNextSlide={nextSlide}
            disabledPrev={false}
            disabledNext={false}
          >
            <Dots className={dotWrapper} count={3} activeElement={currentSlide} />
          </SliderArrows>
        )}
        {navigation && !isDesktop && <Dots className={dotWrapper} count={3} activeElement={currentSlide} />}
        {!navigation && <Dots className={dotWrapper} count={3} activeElement={currentSlide} />}
      </div>
    </div>
  );
};

export default Carousel;
