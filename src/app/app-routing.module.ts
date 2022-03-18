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
import {ContentLayoutComponent} from './content/content-layout/content-layout.component';
import {InclusiveLanguageComponent} from './content/inclusive-language/inclusive-language.component';
import {LanguageAndGrammarComponent} from './content/language-and-grammar/language-and-grammar.component';
import {VocabularyComponent} from './content/vocabulary/vocabulary.component';
import {VoiceAndTonePrinciplesComponent} from './content/voice-and-tone-principles/voice-and-tone-principles.component';
import {WritingGuidelinesComponent} from './content/writing-guidelines/writing-guidelines.component';
import {WritingStyleComponent} from './content/writing-style/writing-style.component';
import {DateAndTimeComponent} from './content/writing-guidelines/date-and-time/date-and-time.component';
import {EmptyStateComponent} from './content/writing-guidelines/empty-state/empty-state.component';
import {ErrorMessageComponent} from './content/writing-guidelines/error-message/error-message.component';
import {FeatureDiscoveryComponent} from './content/writing-guidelines/feature-discovery/feature-discovery.component';
import {InfoMessagesComponent} from './content/writing-guidelines/info-messages/info-messages.component';
import {SuccessMessageComponent} from './content/writing-guidelines/success-message/success-message.component';
import {WarningMessageComponent} from './content/writing-guidelines/warning-message/warning-message.component';
import {WritingGuidelinesLayoutComponent} from './content/writing-guidelines/writing-guidelines-layout/writing-guidelines-layout.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
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
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ContentComponent
      },
      {
        path: 'inclusive-language',
        pathMatch: 'full',
        component: InclusiveLanguageComponent
      },
      {
        path: 'language-and-grammar',
        pathMatch: 'full',
        component: LanguageAndGrammarComponent
      },
      {
        path: 'vocabulary',
        pathMatch: 'full',
        component: VocabularyComponent
      },
      {
        path: 'voice-and-tone-principles',
        pathMatch: 'full',
        component: VoiceAndTonePrinciplesComponent
      },
      {
        path: 'writing-guidelines',
        pathMatch: 'full',
        component: WritingGuidelinesComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: WritingGuidelinesLayoutComponent,
      },
      {
        path: 'date-and-time',
        pathMatch: 'full',
        component: DateAndTimeComponent
      },
      {
        path: 'empty-state',
        pathMatch: 'full',
        component: EmptyStateComponent
      },
      {
        path: 'error-message',
        pathMatch: 'full',
        component: ErrorMessageComponent
      },
      {
        path: 'feature-discovery',
        pathMatch: 'full',
        component: FeatureDiscoveryComponent
      },
      {
        path: 'info-messages',
        pathMatch: 'full',
        component: InfoMessagesComponent
      },
      {
        path: 'success-message',
        pathMatch: 'full',
        component: SuccessMessageComponent
      },
      {
        path: 'warning-message',
        pathMatch: 'full',
        component: WarningMessageComponent
      },
      {
        path: 'writing-style',
        pathMatch: 'full',
        component: WritingStyleComponent
      }
    ]
  },
  {
    path: 'patterns', component: PatternsComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
