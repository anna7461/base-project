import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ComponentsComponent} from './components/components.component';
import {HomeComponent} from './home/home.component';
import {BrandComponent} from './brand/brand.component';
import {FoundationsComponent} from './foundations/foundations.component';
import {ContentComponent} from './content/content.component';
import {PatternsComponent} from './patterns/patterns.component';
import {ResourcesComponent} from './resources/resources.component';
import {AccessibilityComponent} from './foundations/accessibility/accessibility.component';
import {FoundationsLayoutComponent} from './foundations/foundations-layout/foundations-layout.component';
import {ColorComponent} from './foundations/color/color.component';
import {GridComponent} from './foundations/grid/grid.component';

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
    path: 'foundations',
    component: FoundationsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FoundationsLayoutComponent
      },
      {
        path: 'accessibility',
        pathMatch: 'full',
        component: AccessibilityComponent
      },
      {
        path: 'color',
        pathMatch: 'full',
        component: ColorComponent
      },
      {
        path: 'grid',
        pathMatch: 'full',
        component: GridComponent
      }
    ]
  },
  {
    path: 'content', component: ContentComponent
  },
  {
    path: 'patterns', component: PatternsComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
