import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToptalComponent } from './projects/toptal/toptal.component';
import { FreecodecampComponent } from './projects/freecodecamp/freecodecamp.component';
import { ProjectsComponent } from './projects/projects.component';
import { PluralsightComponent } from './projects/pluralsight/pluralsight.component';
import { NngroupComponent } from './projects/nngroup/nngroup.component';
import { GuidesComponent } from './guides/guides.component';
import { CssGuidesComponent } from './guides/css-guides/css-guides.component';
import { CssGridComponent } from './guides/css-guides/css-grid/css-grid.component';
import { GridContainerRelatedPropertiesComponent } from './guides/css-guides/css-grid/grid-container-related-properties/grid-container-related-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    ToptalComponent,
    ProjectsComponent,
    PluralsightComponent,
    NngroupComponent,
    FreecodecampComponent,
    GuidesComponent,
    CssGuidesComponent,
    CssGridComponent,
    GridContainerRelatedPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
