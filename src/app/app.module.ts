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
import { InclusiveLanguageComponent } from './content/inclusive-language/inclusive-language.component';
import { ContentLayoutComponent } from './content/content-layout/content-layout.component';
import { LanguageAndGrammarComponent } from './content/language-and-grammar/language-and-grammar.component';
import { VocabularyComponent } from './content/vocabulary/vocabulary.component';
import { VoiceAndTonePrinciplesComponent } from './content/voice-and-tone-principles/voice-and-tone-principles.component';
import { WritingStyleComponent } from './content/writing-style/writing-style.component';
import { WritingGuidelinesComponent } from './content/writing-guidelines/writing-guidelines.component';
import { DateAndTimeComponent } from './content/writing-guidelines/date-and-time/date-and-time.component';
import { EmptyStateComponent } from './content/writing-guidelines/empty-state/empty-state.component';
import { ErrorMessageComponent } from './content/writing-guidelines/error-message/error-message.component';
import { FeatureDiscoveryComponent } from './content/writing-guidelines/feature-discovery/feature-discovery.component';
import { InfoMessagesComponent } from './content/writing-guidelines/info-messages/info-messages.component';
import { SuccessMessageComponent } from './content/writing-guidelines/success-message/success-message.component';
import { WarningMessageComponent } from './content/writing-guidelines/warning-message/warning-message.component';
import { WritingGuidelinesLayoutComponent } from './content/writing-guidelines/writing-guidelines-layout/writing-guidelines-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './patterns/forms/forms.component';
import { MessagesComponent } from './patterns/messages/messages.component';
import { FirstImpressionsComponent } from './patterns/first-impressions/first-impressions.component';
import { PatternsLayoutComponent } from './patterns/patterns-layout/patterns-layout.component';
import { ColorPalettesComponent } from './resources/color-palettes/color-palettes.component';
import { ContributionComponent } from './resources/contribution/contribution.component';
import { DesignPrinciplesComponent } from './resources/design-principles/design-principles.component';
import { FigmaLibraryComponent } from './resources/figma-library/figma-library.component';
import { FontsComponent } from './resources/fonts/fonts.component';
import { IllustrationLibraryComponent } from './resources/illustration-library/illustration-library.component';
import { LogoLibraryComponent } from './resources/logo-library/logo-library.component';
import { PresentationKitComponent } from './resources/presentation-kit/presentation-kit.component';
import { TemplatesComponent } from './resources/templates/templates.component';
import { ValuesAndPrinciplesComponent } from './resources/values-and-principles/values-and-principles.component';
import { ResourcesLayoutComponent } from './resources/resources-layout/resources-layout.component';


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
    InclusiveLanguageComponent,
    ContentLayoutComponent,
    LanguageAndGrammarComponent,
    VocabularyComponent,
    VoiceAndTonePrinciplesComponent,
    WritingStyleComponent,
    WritingGuidelinesComponent,
    DateAndTimeComponent,
    EmptyStateComponent,
    ErrorMessageComponent,
    FeatureDiscoveryComponent,
    InfoMessagesComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
    WritingGuidelinesLayoutComponent,
    NotFoundComponent,
    FormsComponent,
    MessagesComponent,
    FirstImpressionsComponent,
    PatternsLayoutComponent,
    ColorPalettesComponent,
    ContributionComponent,
    DesignPrinciplesComponent,
    FigmaLibraryComponent,
    FontsComponent,
    IllustrationLibraryComponent,
    LogoLibraryComponent,
    PresentationKitComponent,
    TemplatesComponent,
    ValuesAndPrinciplesComponent,
    ResourcesLayoutComponent,
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
