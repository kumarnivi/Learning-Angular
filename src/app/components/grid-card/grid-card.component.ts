import { style, transition, trigger ,animate} from '@angular/animations';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
 
})
export class GridCardComponent {

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