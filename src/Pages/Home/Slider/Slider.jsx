
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


import slide1 from '../../../assets/slider1.png';
import slide2 from '../../../assets/slider2.png';
import slide3 from '../../../assets/slider3.png';
import slide4 from '../../../assets/slider4.png';
import slide5 from '../../../assets/slider5.png';
import slide6 from '../../../assets/slider6.png';


const Slider = () => {
    return (
        <>
        <div className='mt-20'>
           <h2 className='text-3xl text-white mb-5 font-bold ml-10'>NEWEST RELEASES</h2>
           <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={slide1} alt="slide1" /></SwiperSlide>
          <SwiperSlide><img src={slide2} alt="slide2" /></SwiperSlide>
          <SwiperSlide><img src={slide3} alt="slide3" /></SwiperSlide>
          <SwiperSlide><img src={slide4} alt="slide4" /></SwiperSlide>
          <SwiperSlide><img src={slide5} alt="slide5" /></SwiperSlide>
          <SwiperSlide><img src={slide6} alt="slide5" /></SwiperSlide>
          
        </Swiper>
        </div>
       
      </>
    );
};

export default Slider;