import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './brand/brand.component';
import { FoundationsComponent } from './foundations/foundations.component';
import { ContentComponent } from './content/content.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ResourcesComponent } from './resources/resources.component';
import { AccessibilityComponent } from './foundations/accessibility/accessibility.component';
import { FoundationsLayoutComponent } from './foundations/foundations-layout/foundations-layout.component';
import { DoDontComponent } from './app-shared/shared-components/do-dont/do-dont.component';
import { ColorComponent } from './foundations/color/color.component';
import { PageBannerComponent } from './app-shared/shared-components/page-banner/page-banner.component';
import { GridComponent } from './foundations/grid/grid.component';
import { IconographyComponent } from './foundations/iconography/iconography.component';
import { IllustrationsComponent } from './foundations/illustrations/illustrations.component';
import { LogosComponent } from './foundations/logos/logos.component';
import { TypographyComponent } from './foundations/typography/typography.component';
import { MissionComponent } from './brand/mission/mission.component';
import { PersonalityComponent } from './brand/personality/personality.component';
import { PromiseComponent } from './brand/promise/promise.component';
import { ValuesComponent } from './brand/values/values.component';
import { BrandLayoutComponent } from './brand/brand-layout/brand-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    FoundationsComponent,
    ContentComponent,
    PatternsComponent,
    ResourcesComponent,
    AccessibilityComponent,
    FoundationsLayoutComponent,
    DoDontComponent,
    ColorComponent,
    PageBannerComponent,
    GridComponent,
    IconographyComponent,
    IllustrationsComponent,
    LogosComponent,
    TypographyComponent,
    MissionComponent,
    PersonalityComponent,
    PromiseComponent,
    ValuesComponent,
    BrandLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
