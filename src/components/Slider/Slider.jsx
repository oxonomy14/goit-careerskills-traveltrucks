    // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({camper}) => {
   if (!camper?.gallery || camper.gallery.length === 0) {
    return <p>No images available</p>;
  }
  return (

 
     <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={48}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {camper.gallery.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.original}
            alt={camper.name}
            style={{
              width: '292px',
              height: '312px',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
        </SwiperSlide>
      ))}
      </Swiper>
  );


};

export default Slider;