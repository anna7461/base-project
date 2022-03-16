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
