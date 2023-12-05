import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements AfterViewInit {
  


  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const nextButton = this.elRef.nativeElement.querySelector('#next');
    const prevButton = this.elRef.nativeElement.querySelector('#prev');

    nextButton.addEventListener('click', () => {
      const lists = this.elRef.nativeElement.querySelectorAll('.item');
      this.renderer.appendChild(this.elRef.nativeElement.querySelector('#slide'), lists[0]);
    });

    prevButton.addEventListener('click', () => {
      const lists = this.elRef.nativeElement.querySelectorAll('.item');
      this.renderer.insertBefore(
        this.elRef.nativeElement.querySelector('#slide'),
        lists[lists.length - 1],
        this.elRef.nativeElement.querySelector('#slide').firstChild
      );
    });
  }
}
