import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar2',
  templateUrl: './menu-bar2.component.html',
  styleUrls: ['./menu-bar2.component.css']
})
export class MenuBar2Component {
  isScrolled: boolean = false;


constructor(private el:ElementRef,private router: Router,private renderer: Renderer2,){}


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const navbar = this.el.nativeElement.querySelector('.top-nav'); 
    if (window.pageYOffset >= 50) {
      this.renderer.setStyle(navbar, 'background', '#24262B');
      this.renderer.setStyle(navbar, 'color', 'black'); 
      this.renderer.setStyle(navbar, 'box-shadow', ' 0 0 50px 10px #adadad2d');
  
  
    } else {
      this.renderer.removeStyle(navbar, 'background');
      this.renderer.removeStyle(navbar, 'color'); 
      this.renderer.removeStyle(navbar, 'box-shadow');

     
    }
  }

}
