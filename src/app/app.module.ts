import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavComponent } from './components/nav/nav.component';
import { GridCardComponent } from './components/grid-card/grid-card.component'
import { AppRoutingModule } from './app.routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuBar2Component } from './components/menu-bar2/menu-bar2.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { DeliveryCardComponent } from './pages/delivery-card/delivery-card.component';
import { FeaturedBooksComponent } from './components/featured-books/featured-books.component';
import { CustomerSaysComponent } from './components/customer-says/customer-says.component';
import { AboutbookComponent } from './components/aboutbook/aboutbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormComponent,
    ListComponent,
    HeadingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    NavComponent,
    GridCardComponent,
    MenuBarComponent,
    MyComponentComponent,
    SliderComponentComponent,
    LoaderComponent,
    SwiperComponent,
    BannerComponent,
    MenuBar2Component,
    FooterComponent,
    AboutComponent,
    DeliveryCardComponent,
    FeaturedBooksComponent,
    CustomerSaysComponent,
    AboutbookComponent
    
  ],
  imports: [ //here use for 2 way binding
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],

  providers: [], //** here inject the services file  */
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
