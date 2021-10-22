import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToptalComponent } from './projects/toptal/toptal.component';
import { FreecodecampComponent } from './projects/freecodecamp/freecodecamp.component';
import { ProjectsComponent } from './projects/projects.component';
import { PluralsightComponent } from './projects/pluralsight/pluralsight.component';
import { NngroupComponent } from './projects/nngroup/nngroup.component';
import { LayoutComponent } from './projects/nngroup/layout/layout.component';
import { GlobalLayoutComponent } from './projects/nngroup/layout/global-layout/global-layout.component';
import { ArticleLayoutComponent } from './projects/nngroup/layout/article-layout/article-layout.component';
import { SharedComponentsComponent } from './projects/nngroup/shared-components/shared-components.component';
import { HeaderComponent } from './projects/nngroup/shared-components/header/header.component';
import { FooterComponent } from './projects/nngroup/shared-components/footer/footer.component';
import { BodyComponent } from './projects/nngroup/shared-components/body/body.component';
import { NavbarMenuComponent } from './projects/nngroup/shared-components/header/navbar-menu/navbar-menu.component';
import { BrandComponent } from './projects/nngroup/shared-components/header/brand/brand.component';
import { HeaderSearchinputComponent } from './projects/nngroup/shared-components/header/header-searchinput/header-searchinput.component';
import { HeaderActionComponent } from './projects/nngroup/shared-components/header/header-action/header-action.component';
import { FooterNavigationComponent } from './projects/nngroup/shared-components/footer/footer-navigation/footer-navigation.component';
import { FollowCardsComponent } from './projects/nngroup/shared-components/footer/follow-cards/follow-cards.component';
import { FooterContactInfoComponent } from './projects/nngroup/shared-components/footer/footer-contact-info/footer-contact-info.component';
import { CopyrightComponent } from './projects/nngroup/shared-components/footer/copyright/copyright.component';
import { SidebarComponent } from './projects/nngroup/shared-components/body/sidebar/sidebar.component';
import { SidebarNavigationMenuComponent } from './projects/nngroup/shared-components/body/sidebar/sidebar-navigation-menu/sidebar-navigation-menu.component';
import { GuidesComponent } from './guides/guides.component';
import { CssGuidesComponent } from './guides/css-guides/css-guides.component';
import { CssGridComponent } from './guides/css-guides/css-grid/css-grid.component';
import { GridContainerRelatedPropertiesComponent } from './guides/css-guides/css-grid/grid-container-related-properties/grid-container-related-properties.component';
import { FreecodecampFooterComponent } from './projects/freecodecamp/freecodecamp-footer/freecodecamp-footer.component';
import { FreecodecampCertificationsListComponent } from './projects/freecodecamp/freecodecamp-certifications-list/freecodecamp-certifications-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToptalComponent,
    ProjectsComponent,
    PluralsightComponent,
    NngroupComponent,
    FreecodecampComponent,
    LayoutComponent,
    GlobalLayoutComponent,
    ArticleLayoutComponent,
    SharedComponentsComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavbarMenuComponent,
    BrandComponent,
    HeaderSearchinputComponent,
    HeaderActionComponent,
    FooterNavigationComponent,
    FollowCardsComponent,
    FooterContactInfoComponent,
    CopyrightComponent,
    SidebarComponent,
    SidebarNavigationMenuComponent,
    GuidesComponent,
    CssGuidesComponent,
    CssGridComponent,
    GridContainerRelatedPropertiesComponent,
    FreecodecampFooterComponent,
    FreecodecampCertificationsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
