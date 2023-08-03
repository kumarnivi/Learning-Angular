import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  titles:string[] = [];
  addTitle() {
    this.titles.push(this.title);
    console.log(this.titles)
  }
}
