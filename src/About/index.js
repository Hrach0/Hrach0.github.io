// Import Swiper React components
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function About(){
    return(
        <div class="div4">



<div class="about" id="menu1-3"><h1>ABOUT</h1></div>


<div class="abp">

<div class="abp1">

<p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>


<div class="abp2">


<div class="abps1">
<p><span class="span1">The Chef?</span> Mr. Italiano himself</p><br/>
<p>We are proud of our interiors.</p>
</div>

<div class="abps2">
<img src="https://www.w3schools.com/w3images/chef.jpg"/>
</div>


</div>


<div class="img2">
<Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://www.w3schools.com/w3images/onepage_restaurant.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/coffeeshop.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/coffeehouse2.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/map.jpg"/></SwiperSlide>
      ...
    </Swiper>

</div>



<div class="div5">
<h4>Opening Hours</h4>
</div>

<div class="div6">


<div class="oph1">
<p>Mon & Tue CLOSED</p>
<p>Wednesday 10.00 - 24.00</p>
<p>Thursday 10:00 - 24:00</p>
</div>


<div class="oph2">
<p>Friday 10:00 - 12:00</p>
<p>Saturday 10:00 - 23:00</p>
<p>Sunday Closed</p>
</div>


</div>

</div>
</div>
</div>
    )
}

export default About;