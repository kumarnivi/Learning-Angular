import { style, transition, trigger ,animate} from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import anime from 'animejs/lib/anime.es.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
 
})
export class GridCardComponent implements OnInit ,AfterViewInit{
  constructor(@Inject(DOCUMENT) private document: Document) {}
 
  @ViewChild('imageFirst', { static: true }) imageFirst!: ElementRef<
  HTMLDivElement
>;


initScrollAnimations(): void {
  gsap.to(this.imageFirst.nativeElement, {
    scrollTrigger: {
      trigger: this.imageFirst.nativeElement,
      scrub: true,

      start: '50% center',
    } as gsap.plugins.ScrollTriggerInstanceVars,
    duration: 1.1,
    scale: 1.5,
    height: 250,


    
  });

  
}




  ngOnInit() {
    
    const animeBox = document.querySelector('.animeBox');
    anime({
      targets: animeBox,
      left: '250px',
      translateX: 250,
      backgroundColor: '#FFF',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      loop:true
   
    });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 195%",
        end: "70% 150%",
        scrub: true,
        // markers: true,
      }
    });
  
    tl.to("#fanta",{
      top: "188%",
      left: "60%",    
  })

  }


  ngAfterViewInit() {
   
  }


  
  customOptions: OwlOptions = {
    items:1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src= "../../../assets/images/angle-circle-left.png"/>', '<img src="../../../assets/images/angle-circle-right.png"/>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true


}

// card looping 
cardData = [
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Card 2',
    content: 'Content for Card 2',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: ' Lorem Ipsum',
    content: 'What is Lorem Ipsum',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  
  // Add more card data as needed
];





}