import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
showBadge: any;
onClick() {
throw new Error('Method not implemented.');
}
activeButton: any;
isHamburguer: any;
showContentt(arg0: number) {
throw new Error('Method not implemented.');
}
scrollToTopAndNavigate(arg0: string) {
throw new Error('Method not implemented.');
}
updateNoticeById(_t110: any) {
throw new Error('Method not implemented.');
}



  // Define a variable to track the visibility of the dropdown
  isDropdownOpens = false;
  updateButtonClicked: any;
  el: any;
  isLogOut: any;
  memberId: any;
  notification: any;

  // Function to open the dropdown
  DropdownOpen() {
    this.isDropdownOpens = true;
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  // Function to close the dropdown
  closeDrodown() {
    this.isDropdownOpens = false;
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  // Function to handle document click events
  onDocumentClick(event: MouseEvent) {
    // Check if the clicked element is outside the dropdown
    if (
      !this.el.nativeElement.contains(event.target) &&
      !this.updateButtonClicked
    ) {
      this.closeDrodown();
    }
  }

  // Cleanup event listener when the component is destroyed
  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }


  
  
}
