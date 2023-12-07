import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      // Anchor placement:
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    // this.initialAnimations();
    this.initScrollAnimations();
   
  }


  @ViewChild('imageFirst', { static: true }) imageFirst!: ElementRef<
  HTMLDivElement
>;

@ViewChild('imageFirst', { static: true }) content!: ElementRef<
HTMLDivElement
>;
  // gsap

  constructor(@Inject(DOCUMENT) private document: Document) {}


  initScrollAnimations(): void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
  
        start: '50% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      height: 250,
  
  
      
    });



    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.content.nativeElement,
        scrub: true,
  
        start: '50% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
  
      
    });
  }

  // initialAnimations(): void {
  //   gsap.from(this.content.nativeElement.childNodes, {
  //     duration: 0.5,
  //     opacity: 0,
  //     y: -20,
  //     stagger: 0.2,
  //     delay: 0.5,
  //   });

  

  // }


}
