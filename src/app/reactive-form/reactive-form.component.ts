import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent {

}

// export class ReactiveFormComponent {
//  contactForm = new FormGroup({
//   firstName : new FormControl('',[Validators.required, Validators.minLength(10)]),
//   lastName : new FormControl('',[Validators.required, Validators.maxLength(15),Validators.pattern('^[a-zA-z]+$')]),
//   email : new FormControl('',[Validators.required]),
//   gender : new FormControl('',[Validators.required]),
//   isMarried : new FormControl('',[Validators.requiredTrue]),
//   country : new FormControl('',[Validators.required]),
//   address: new FormGroup({
//   city: new FormControl('',[Validators.required]),
//   street:new FormControl('',[Validators.required]),
//   pinCode:new FormControl('',[Validators.required])

//  })

//  })

 
//  get firstname() {
//   return this.contactForm.get('firstName')
//  }
  
//  get lastname() {
//   return this.contactForm.get('lastname')
//  }
  
//  get email() {
//   return this.contactForm.get('email')
//  }
  
//  get gender() {
//   return this.contactForm.get('gender')
//  }
  
//  get ismarrid() {
//   return this.contactForm.get('ismarrid')
//  }
//  get country() {
//   return this.contactForm.get('country')
//  }
//  get city() {
//   return this.contactForm.get('adress')?.get('city')
//  }

//  get street() {
//   return this.contactForm.get('adress')?.get('street')
//  }
//  get pincode() {
//   return this.contactForm.get('adress')?.get('pincode')
//  }
  
//  onSubmit(){
//   console.log(this.contactForm.value);
//  }
// }
