import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit{
 
  constructor(@Inject(DOCUMENT) private document: Document) {}
 
  ngOnInit(): void {
    this.initScrollAnimations()
  }

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




}
