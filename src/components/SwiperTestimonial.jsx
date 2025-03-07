import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import testimonials from '../assets/img/testimonials.png'



const SwiperTestimonial = () => {
  return (
    <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} // Sửa lại dòng này
            pagination={{ clickable: true }}
            touchEventsTarget="wrapper"
            className='swiper-wrapper mt-8 items-center'
        >

            <SwiperSlide>
                <p className="text-desc text-center md:w-2/3 mx-auto">
                    ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. 
                    Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. 
                    Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’
                </p>
                <div className="mt-8 text-center">
                    <img src={testimonials} alt="image" className="rounded-full mx-auto" />
                    <h4 className="mt-4 text-mau_den text-base font-semibold">Michelle Anna</h4>
                    <h4 className="text-mau_den text-base">CEO, Co-Founder, XYZ Inc.</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <p className="text-desc text-center md:w-2/3 mx-auto">
                    ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. 
                    Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. 
                    Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’
                </p>
                <div className="mt-8 text-center">
                    <img src={testimonials} alt="image" className="rounded-full mx-auto" />
                    <h4 className="mt-4 text-mau_den text-base font-semibold">Michelle Anna</h4>
                    <h4 className="text-mau_den text-base">CEO, Co-Founder, XYZ Inc.</h4>
                </div>
            </SwiperSlide>
                   
                {/* <SwiperNavButton /> */}
        </Swiper>
  )
}

export default SwiperTestimonial