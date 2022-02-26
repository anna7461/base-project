import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ComponentsComponent} from './components/components.component';
import {HomeComponent} from './home/home.component';
import {BrandComponent} from './brand/brand.component';
import {FoundationsComponent} from './foundations/foundations.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'components', component: ComponentsComponent
  },
  {
    path: 'brand', component: BrandComponent
  },
  {
    path: 'foundations', component: FoundationsComponent
  },
  {
    path: 'content', component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
