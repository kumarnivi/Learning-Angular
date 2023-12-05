import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {

  ngOnInit(): void {
    new Swiper('.clients-slider', {
      effect:'coverflow',
      grabCursor:true,
      centeredSlides:true,
      slidesPerView: 'auto',
      coverflowEffect:{
  rotate:50,
  stretch:0,
  depth:200,
  modifier:1,
  slideShadows:true
      },
      speed: 400,
      loop: true,
      autoplay: {
        delay:2000,
        disableOnInteraction: false
      },
      // slidesPerView: 'auto',
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 40
      //   },
      //   480: {
      //     slidesPerView: 3,
      //     spaceBetween: 60
      //   },
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 80
      //   },
      //   992: {
      //     slidesPerView: 6,
      //     spaceBetween: 120
      //   }
      // }
    });
  }


}
