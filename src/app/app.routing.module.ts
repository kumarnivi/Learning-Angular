import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { GridCardComponent } from './components/grid-card/grid-card.component';


const routes: Routes = [
{path:'grid',component:GridCardComponent}


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
  