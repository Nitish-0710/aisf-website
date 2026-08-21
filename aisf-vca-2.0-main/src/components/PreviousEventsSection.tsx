import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

import img1 from "@/assets/CodeApex/winningTeam/OAK_7075.JPG";
import img2 from "@/assets/CodeApex/winningTeam/OAK_7090.JPG";
import img3 from "@/assets/CodeApex/winningTeam/OAK_7095.JPG";
import img5 from "@/assets/CodeApex/winningTeam/OAK_7100.JPG";
import img6 from "@/assets/CodeApex/winningTeam/OAK_7106.JPG";
import img8 from "@/assets/CodeApex/winningTeam/OAK_7113.JPG";
import img9 from "@/assets/CodeApex/winningTeam/OAK_7114.JPG";
import img10 from "@/assets/CodeApex/winningTeam/OAK_7115.JPG";
import img11 from "@/assets/CodeApex/winningTeam/OAK_7138.JPG";
import img12 from "@/assets/CodeApex/winningTeam/OAK_7139.JPG";
import img13 from "@/assets/CodeApex/winningTeam/OAK_7143.JPG";
import img14 from "@/assets/CodeApex/participents-working/OAK_7003.JPG";
import img15 from "@/assets/CodeApex/Speeches/OAK_7031.JPG";
import img16 from "@/assets/CodeApex/Speeches/OAK_7034.JPG";
import img17 from "@/assets/CodeApex/Speeches/OAK_7041.JPG";
import img18 from "@/assets/CodeApex/Speeches/OAK_7046.JPG";
import img19 from "@/assets/CodeApex/Speeches/OAK_7054.JPG";
import img20 from "@/assets/CodeApex/Speeches/OAK_7065.JPG";
import img21 from "@/assets/CodeApex/Speeches/OAK_7056.JPG";
import img22 from "@/assets/CodeApex/hospitality/OAK_7049.JPG";
import img23 from "@/assets/CodeApex/hospitality/OAK_7052.JPG";
import img24 from "@/assets/CodeApex/other/OAK_7002.JPG";
import img25 from "@/assets/CodeApex/other/OAK_7013.JPG";
import img26 from "@/assets/CodeApex/other/OAK_7014.JPG";
import img27 from "@/assets/CodeApex/other/OAK_7018.JPG";
import img28 from "@/assets/CodeApex/other/OAK_7023.JPG";
import img29 from "@/assets/CodeApex/other/OAK_7037.JPG";
import img30 from "@/assets/CodeApex/other/OAK_7069.JPG";
import img31 from "@/assets/CodeApex/other/OAK_7070.JPG";
import img32 from "@/assets/CodeApex/standUp/OAK_7128.JPG";

const images = [
  img1, img2, img3, img5, img6, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32
];

const PreviousEventsSection = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <section id="previous" className="w-full py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="font-pixel text-xl md:text-2xl text-primary mb-12 section-title-flicker">
          Glimpse of Previous Event
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          className="w-full pb-12"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-[280px] sm:!w-[320px] md:!w-[380px] 
                          aspect-square
                         rounded-2xl relative flex items-center justify-center"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-2xl bg-red-600/20 blur-2xl"></div>

              {/* Card */}
              <div
                className="relative w-full h-full rounded-2xl 
                              border border-red-500/60
                              shadow-[0_0_25px_rgba(255,0,0,0.6)]
                              hover:shadow-[0_0_45px_rgba(255,0,0,0.9)]
                              transition-all duration-500 overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows BELOW */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="px-6 py-2 rounded-full 
                text-red-500
                hover:bg-red-800 hover:text-white
                shadow-[0_0_15px_rgba(255,0,0,0.6)]
                transition-all duration-300"
          >
            Prev
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="px-6 py-2 rounded-full 
                text-red-500
                hover:bg-red-800 hover:text-white
                shadow-[0_0_15px_rgba(255,0,0,0.6)]
                transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviousEventsSection;
