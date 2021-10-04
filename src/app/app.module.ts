import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { PluralsightComponent } from './projects/pluralsight/pluralsight.component';
import { NngroupComponent } from './projects/nngroup/nngroup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PluralsightComponent,
    NngroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
