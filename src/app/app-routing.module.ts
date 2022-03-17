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
import {IconographyComponent} from './foundations/iconography/iconography.component';
import {IllustrationsComponent} from './foundations/illustrations/illustrations.component';
import {LogosComponent} from './foundations/logos/logos.component';
import {TypographyComponent} from './foundations/typography/typography.component';
import {BrandLayoutComponent} from './brand/brand-layout/brand-layout.component';
import {MissionComponent} from './brand/mission/mission.component';
import {PersonalityComponent} from './brand/personality/personality.component';
import {PromiseComponent} from './brand/promise/promise.component';
import {ValuesComponent} from './brand/values/values.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'components', component: ComponentsComponent
  },
  {
    path: 'brand',
    component: BrandComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BrandLayoutComponent
      },
      {
        path: 'mission',
        pathMatch: 'full',
        component: MissionComponent
      },
      {
        path: 'personality',
        pathMatch: 'full',
        component: PersonalityComponent
      },
      {
        path: 'promise',
        pathMatch: 'full',
        component: PromiseComponent
      },
      {
        path: 'values',
        pathMatch: 'full',
        component: ValuesComponent
      },
    ],
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
      },
      {
        path: 'iconography',
        pathMatch: 'full',
        component: IconographyComponent
      },
      {
        path: 'illustrations',
        pathMatch: 'full',
        component: IllustrationsComponent
      },
      {
        path: 'logos',
        pathMatch: 'full',
        component: LogosComponent
      },
      {
        path: 'typography',
        pathMatch: 'full',
        component: TypographyComponent
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
