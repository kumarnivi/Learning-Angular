import { Component, Input,OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
 @Input() innerText:string[] = [];
 noOfTitle=1
 ngOnChanges(changes: SimpleChanges): void {
  // if(!changes['innerText'].isFirstChange()){
  //   console.log('onChanges Called',changes['innerText'].currentValue)

  // }
  //  console.log('ngOnChanges Call!')
 }

 ngOnInit(): void {
   console.log('ngOnInint Called');
   this.innerText.push('First Title') //here when open the browser that time 1st show this value
   this.noOfTitle = 1
 
  }
 
 ngDoCheck(): void {
  console.log('ngDoCHeack call')
  if (this.innerText.length > this.noOfTitle){
    console.log('you are modifing code');
    this.noOfTitle++;
  }
 }

ngOnDestroy(): void {
  console.log('ngOnDestoyed is called');
  
}
}
   