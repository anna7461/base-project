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
import {FirstImpressionsComponent} from './patterns/first-impressions/first-impressions.component';
import {FormsComponent} from './patterns/forms/forms.component';
import {MessagesComponent} from './patterns/messages/messages.component';
import {ColorPalettesComponent} from './resources/color-palettes/color-palettes.component';
import {ContributionComponent} from './resources/contribution/contribution.component';
import {DesignPrinciplesComponent} from './resources/design-principles/design-principles.component';
import {FigmaLibraryComponent} from './resources/figma-library/figma-library.component';
import {FontsComponent} from './resources/fonts/fonts.component';
import {IllustrationLibraryComponent} from './resources/illustration-library/illustration-library.component';
import {LogoLibraryComponent} from './resources/logo-library/logo-library.component';
import {PresentationKitComponent} from './resources/presentation-kit/presentation-kit.component';
import {TemplatesComponent} from './resources/templates/templates.component';
import {ValuesAndPrinciplesComponent} from './resources/values-and-principles/values-and-principles.component';
import {PatternsLayoutComponent} from './patterns/patterns-layout/patterns-layout.component';
import {ResourcesLayoutComponent} from './resources/resources-layout/resources-layout.component';
import {ComponentsLayoutComponent} from './components/components-layout/components-layout.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {AvatarGroupComponent} from './components/avatar-group/avatar-group.component';
import {BadgeComponent} from './components/badge/badge.component';
import {BannerComponent} from './components/banner/banner.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {CodeComponent} from './components/avatar/code/code.component';
import {DateTimePickerComponent} from './components/date-time-picker/date-time-picker.component';
import {DropdownMenuComponent} from './components/dropdown-menu/dropdown-menu.component';
import {DynamicTableComponent} from './components/dynamic-table/dynamic-table.component';
import {FlagComponent} from './components/flag/flag.component';
import {FormComponent} from './components/form/form.component';
import {IconComponent} from './components/icon/icon.component';
import {IconObjectComponent} from './components/icon-object/icon-object.component';
import {InlineDialogComponent} from './components/inline-dialog/inline-dialog.component';
import {InlineEditComponent} from './components/inline-edit/inline-edit.component';
import {InlineMessageComponent} from './components/inline-message/inline-message.component';
import {LogoComponent} from './components/logo/logo.component';
import {LozengeComponent} from './components/lozenge/lozenge.component';
import {ModalDialogComponent} from './components/modal-dialog/modal-dialog.component';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {ProgressIndicatorComponent} from './components/progress-indicator/progress-indicator.component';
import {ProgressTrackerComponent} from './components/progress-tracker/progress-tracker.component';
import {RadioComponent} from './components/radio/radio.component';
import {RangeComponent} from './components/range/range.component';
import {SectionMessageComponent} from './components/section-message/section-message.component';
import {SelectComponent} from './components/select/select.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {TagComponent} from './components/tag/tag.component';
import {TagGroupComponent} from './components/tag-group/tag-group.component';
import {TextAreaComponent} from './components/text-area/text-area.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {ToggleComponent} from './components/toggle/toggle.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';

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
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ComponentsLayoutComponent
      },
      {
        path: 'avatar',
        pathMatch: 'full',
        component: AvatarComponent
      },
      {
        path: 'avatar-group',
        pathMatch: 'full',
        component: AvatarGroupComponent
      },
      {
        path: 'badge',
        pathMatch: 'full',
        component: BadgeComponent
      },
      {
        path: 'banner',
        pathMatch: 'full',
        component: BannerComponent
      },
      {
        path: 'breadcrumbs',
        pathMatch: 'full',
        component: BreadcrumbsComponent
      },
      {
        path: 'button',
        pathMatch: 'full',
        component: ButtonComponent
      },
      {
        path: 'checkbox',
        pathMatch: 'full',
        component: CheckboxComponent
      },
      {
        path: 'code',
        pathMatch: 'full',
        component: CodeComponent
      },
      {
        path: 'date-time-picker',
        pathMatch: 'full',
        component: DateTimePickerComponent
      },
      {
        path: 'dropdown-menu',
        pathMatch: 'full',
        component: DropdownMenuComponent
      },
      {
        path: 'dynamic-table',
        pathMatch: 'full',
        component: DynamicTableComponent
      },
      {
        path: 'empty-state',
        pathMatch: 'full',
        component: EmptyStateComponent
      },
      {
        path: 'flag',
        pathMatch: 'full',
        component: FlagComponent
      },
      {
        path: 'form',
        pathMatch: 'full',
        component: FormComponent
      },
      {
        path: 'icon',
        pathMatch: 'full',
        component: IconComponent
      },
      {
        path: 'icon-object',
        pathMatch: 'full',
        component: IconObjectComponent
      },
      {
        path: 'inline-dialog',
        pathMatch: 'full',
        component: InlineDialogComponent
      },
      {
        path: 'inline-edit',
        pathMatch: 'full',
        component: InlineEditComponent
      },
      {
        path: 'inline-message',
        pathMatch: 'full',
        component: InlineMessageComponent
      },
      {
        path: 'logo',
        pathMatch: 'full',
        component: LogoComponent
      },
      {
        path: 'lozenge',
        pathMatch: 'full',
        component: LozengeComponent
      },
      {
        path: 'modal-dialog',
        pathMatch: 'full',
        component: ModalDialogComponent
      },
      {
        path: 'onboarding',
        pathMatch: 'full',
        component: OnboardingComponent
      },
      {
        path: 'page-header',
        pathMatch: 'full',
        component: PageHeaderComponent
      },
      {
        path: 'pagination',
        pathMatch: 'full',
        component: PaginationComponent
      },
      {
        path: 'progress-bar',
        pathMatch: 'full',
        component: ProgressBarComponent
      },
      {
        path: 'progress-indicator',
        pathMatch: 'full',
        component: ProgressIndicatorComponent
      },
      {
        path: 'progress-tracker',
        pathMatch: 'full',
        component: ProgressTrackerComponent
      },
      {
        path: 'radio',
        pathMatch: 'full',
        component: RadioComponent
      },
      {
        path: 'range',
        pathMatch: 'full',
        component: RangeComponent
      },
      {
        path: 'section-message',
        pathMatch: 'full',
        component: SectionMessageComponent
      },
      {
        path: 'select',
        pathMatch: 'full',
        component: SelectComponent
      },
      {
        path: 'spinner',
        pathMatch: 'full',
        component: SpinnerComponent
      },
      {
        path: 'tabs',
        pathMatch: 'full',
        component: TabsComponent
      },
      {
        path: 'tag',
        pathMatch: 'full',
        component: TagComponent
      },
      {
        path: 'tag-group',
        pathMatch: 'full',
        component: TagGroupComponent
      },
      {
        path: 'text-area',
        pathMatch: 'full',
        component: TextAreaComponent
      },
      {
        path: 'text-field',
        pathMatch: 'full',
        component: TextFieldComponent
      },
      {
        path: 'toggle',
        pathMatch: 'full',
        component: ToggleComponent
      },
      {
        path: 'tooltip',
        pathMatch: 'full',
        component: TooltipComponent
      },
    ]
  },
  {
    path: 'patterns',
    component: PatternsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PatternsLayoutComponent
      },
      {
        path: 'first-impressions',
        pathMatch: 'full',
        component: FirstImpressionsComponent
      },
      {
        path: 'forms',
        pathMatch: 'full',
        component: FormsComponent
      },
      {
        path: 'messages',
        pathMatch: 'full',
        component: MessagesComponent
      },
    ]
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ResourcesLayoutComponent
      },
      {
        path: 'color-palettes',
        pathMatch: 'full',
        component: ColorPalettesComponent
      },
      {
        path: 'contribution',
        pathMatch: 'full',
        component: ContributionComponent
      },
      {
        path: 'design-principles',
        pathMatch: 'full',
        component: DesignPrinciplesComponent
      },
      {
        path: 'figma-library',
        pathMatch: 'full',
        component: FigmaLibraryComponent
      },
      {
        path: 'fonts',
        pathMatch: 'full',
        component: FontsComponent
      },
      {
        path: 'illustration-library',
        pathMatch: 'full',
        component: IllustrationLibraryComponent
      },
      {
        path: 'logo-library',
        pathMatch: 'full',
        component: LogoLibraryComponent
      },
      {
        path: 'presentation-kit',
        pathMatch: 'full',
        component: PresentationKitComponent
      },
      {
        path: 'templates',
        pathMatch: 'full',
        component: TemplatesComponent
      },
      {
        path: 'values-and-principles',
        pathMatch: 'full',
        component: ValuesAndPrinciplesComponent
      },
    ]
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
