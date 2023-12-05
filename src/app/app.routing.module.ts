import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { BannerComponent } from './components/banner/banner.component';


const routes: Routes = [
{path:'',component:GridCardComponent},
{path:'about',component:MyComponentComponent},
{path:'loader', component:LoaderComponent},
{path:'swiper', component:SwiperComponent},
{path:'banner', component:BannerComponent}
]


const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  };

@NgModule({
    imports: [RouterModule.forRoot(routes,routerOptions)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  