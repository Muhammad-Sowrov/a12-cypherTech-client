
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import banner1 from '../../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../../assets/images/banner/banner4.jpg'

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} className='w-full h-96' alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} className='w-full h-96' alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} className='w-full h-96' alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} className='w-full h-96' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
