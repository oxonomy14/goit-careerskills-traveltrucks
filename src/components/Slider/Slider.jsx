import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ camper }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!camper?.gallery || camper.gallery.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={48}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
                cursor: 'pointer',
              }}
              onClick={() => setSelectedImage(img.original)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Модалка */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
            }}
          />
        </div>
      )}
    </>
  );
};

export default Slider;
