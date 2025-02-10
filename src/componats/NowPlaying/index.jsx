import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import "./NowPlaying.css";
import MovieCard from "../MovieCard";
import sonic3 from "../../assets/images/movies/sonic3.jpg"
import alarum from "../../assets/images/movies/alarum.jpg"
import babygirl from "../../assets/images/movies/babygirl.jpg"
import flow from "../../assets/images/movies/flow.jpg"
import wolfman from "../../assets/images/movies/wolfman.jpg"
import elevation from "../../assets/images/movies/elevation.jpg"
import anora from "../../assets/images/movies/anora.jpg"
import 'swiper/css';
import 'swiper/css/autoplay';


const NowPlaying = () => {
    return (
        <section className="now-playing">
        <h2>Now Playing</h2>
        
       

    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      autoplay
      modules={[Autoplay]}
      loop
    >
      <SwiperSlide> <MovieCard  image={sonic3} rating="5/10"/></SwiperSlide>
      <SwiperSlide>
      <MovieCard  image={alarum} rating="6.5/10"/>


      </SwiperSlide>
      <SwiperSlide> <MovieCard  image={babygirl} rating="8/10"/></SwiperSlide>
      <SwiperSlide> <MovieCard  image={flow} rating="5.834/10"/></SwiperSlide>
      <SwiperSlide> <MovieCard  image={wolfman} rating="7.35/10"/></SwiperSlide>
      <SwiperSlide> <MovieCard  image={elevation} rating="4.9/10"/></SwiperSlide>
      <SwiperSlide> <MovieCard  image={anora} rating="7/10"/></SwiperSlide>
    </Swiper>

        </section>
        
    

    );
}
export default NowPlaying;