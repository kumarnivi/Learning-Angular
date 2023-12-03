import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { MyComponentComponent } from './my-component/my-component.component';


const routes: Routes = [
{path:'',component:GridCardComponent},
{path:'about',component:MyComponentComponent}

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
  