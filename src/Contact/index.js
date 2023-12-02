// Import Swiper React components
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function Contact(){
    return(
        <>
        <div class="img3" id="menu1-4">
          
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://www.w3schools.com/w3images/map.jpg"></img></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/onepage_restaurant.jpg"></img></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/coffeehouse2.jpg"></img></SwiperSlide>
      <SwiperSlide><img src="https://www.w3schools.com/w3images/coffeeshop.jpg"></img></SwiperSlide>
      ...
    </Swiper>
        </div>
        <div class="div7">
<h1>Contact</h1>

<div class="div8">
<div class="div8-1">

<div class="cont">

<div class="conth1"><p>Find us at some address at some place or call us at 05050515-122330</p></div>

<div class="conth2">
<p><span>FYI!</span>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
</div>

<div class="conth3"><h2><span>Reserve</span> a table, ask for today's special or just send us a message:</h2></div>


<div class="div9">
<input type="text" placeholder="Name"/>
<input type="number" placeholder="How Many Peoples"/>
<input type="datetime-local" class="input1" value="2020-11-16T20:00"/>
<input type="" placeholder="Message \ Special requirements"/>
<button class="button1">Send Message</button>
</div>
</div>
</div>
</div>
</div>

<div class="end">

  <h1>
    <a className="inst" href="https://www.instagram.com/__.maroz.__/">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
Powered By Hrach
</a>
   <p className="yu">
    
<a className="inst" href="https://www.facebook.com/hrachya.avetisyan.54?locale=ru_RU">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
  <i  class="fa fa-facebook-f"></i>
</a> 

  <a className="inst" href="https://www.instagram.com/__.maroz.__/">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
  <i  class="fa fa-instagram">  </i>
</a>

    <a className="inst" href="https://vk.com/id635401648">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
  <i  className="fa fa-vk"></i>
</a>
  </p>
  </h1>
  

</div>
        </>
    )
}

export default Contact;