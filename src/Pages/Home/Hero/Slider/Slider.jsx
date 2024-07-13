// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        AutoplayMethods={true}
        modules={[EffectCards, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CKT4BsL/front-view-stacked-books-graduation-cap-ladders-education-day.jpg"
            className="h-[350px] w-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/h9qQFxW/older-sister-is-teaching-younger-sister-how-draw.jpg"
            className="h-[350px] w-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/3k2zYKk/close-up-father-helping-kid-with-homework.jpg"
           className="h-[350px] w-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/fSs6p8G/father-coloring-with-his-cute-son.jpg"
           className="h-[350px] w-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
