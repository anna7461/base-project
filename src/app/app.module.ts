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
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarGroupComponent } from './components/avatar-group/avatar-group.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlanketComponent } from './components/blanket/blanket.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CodeComponent } from './components/code/code.component';
import { CommentComponent } from './components/comment/comment.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { FlagComponent } from './components/flag/flag.component';
import { FormComponent } from './components/form/form.component';
import { IconComponent } from './components/icon/icon.component';
import { IconObjectComponent } from './components/icon-object/icon-object.component';
import { InlineDialogComponent } from './components/inline-dialog/inline-dialog.component';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { InlineMessageComponent } from './components/inline-message/inline-message.component';
import { LogoComponent } from './components/logo/logo.component';
import { LozengeComponent } from './components/lozenge/lozenge.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopupComponent } from './components/popup/popup.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { RadioComponent } from './components/radio/radio.component';
import { RangeComponent } from './components/range/range.component';
import { SectionMessageComponent } from './components/section-message/section-message.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TableTreeComponent } from './components/table-tree/table-tree.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TagComponent } from './components/tag/tag.component';
import { TagGroupComponent } from './components/tag-group/tag-group.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AvatarItemComponent } from './components/avatar/avatar-item/avatar-item.component';
import { AvatarPresenceComponent } from './components/avatar/avatar-presence/avatar-presence.component';
import { AvatarSkeletonComponent } from './components/avatar/avatar-skeleton/avatar-skeleton.component';
import { AvatarStatusComponent } from './components/avatar/avatar-status/avatar-status.component';
import { ButtongroupComponent } from './components/button/buttongroup/buttongroup.component';
import { CodeBlockComponent } from './components/code/code-block/code-block.component';
import { DatePickerComponent } from './components/date-time-picker/date-picker/date-picker.component';
import { TimePickerComponent } from './components/date-time-picker/time-picker/time-picker.component';
import { DropdownItemComponent } from './components/dropdown-menu/dropdown-item/dropdown-item.component';
import { DropdownItemCheckboxComponent } from './components/dropdown-menu/dropdown-item-checkbox/dropdown-item-checkbox.component';
import { DropdownItemGroupComponent } from './components/dropdown-menu/dropdown-item-group/dropdown-item-group.component';
import { DropdownItemRadioComponent } from './components/dropdown-menu/dropdown-item-radio/dropdown-item-radio.component';
import { AutoDismissFlagComponent } from './components/flag/auto-dismiss-flag/auto-dismiss-flag.component';
import { FlagGroupComponent } from './components/flag/flag-group/flag-group.component';
import { FlagsProviderComponent } from './components/flag/flags-provider/flags-provider.component';
import { CustomIconComponent } from './components/icon/custom-icon/custom-icon.component';
import { CustomSvgComponent } from './components/icon/custom-svg/custom-svg.component';
import { InlineEditableTextfieldComponent } from './components/inline-edit/inline-editable-textfield/inline-editable-textfield.component';
import { CustomItemComponent } from './components/menu/custom-item/custom-item.component';
import { ButtonItemComponent } from './components/menu/button-item/button-item.component';
import { HeadingItemComponent } from './components/menu/heading-item/heading-item.component';
import { LinkItemComponent } from './components/menu/link-item/link-item.component';
import { MenuGroupComponent } from './components/menu/menu-group/menu-group.component';
import { PopupMenuGroupComponent } from './components/menu/popup-menu-group/popup-menu-group.component';
import { SectionComponent } from './components/menu/section/section.component';
import { SkeletonHeadingItemComponent } from './components/menu/skeleton-heading-item/skeleton-heading-item.component';
import { SkeletonItemComponent } from './components/menu/skeleton-item/skeleton-item.component';
import { BenefitsModalComponent } from './components/onboarding/benefits-modal/benefits-modal.component';
import { SpotlightCardComponent } from './components/onboarding/spotlight-card/spotlight-card.component';
import { SuccessProgressBarComponent } from './components/progress-bar/success-progress-bar/success-progress-bar.component';
import { TransparentProgressBarComponent } from './components/progress-bar/transparent-progress-bar/transparent-progress-bar.component';
import { RadioGroupComponent } from './components/radio/radio-group/radio-group.component';
import { ExamplesComponent } from './components/avatar/examples/examples.component';
import { UsageComponent } from './components/avatar/usage/usage.component';
import { ComponentsLayoutComponent } from './components/components-layout/components-layout.component';


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
    AvatarComponent,
    AvatarGroupComponent,
    BadgeComponent,
    BannerComponent,
    BlanketComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CalendarComponent,
    CheckboxComponent,
    CodeComponent,
    CommentComponent,
    DateTimePickerComponent,
    DrawerComponent,
    DropdownMenuComponent,
    DynamicTableComponent,
    FlagComponent,
    FormComponent,
    IconComponent,
    IconObjectComponent,
    InlineDialogComponent,
    InlineEditComponent,
    InlineMessageComponent,
    LogoComponent,
    LozengeComponent,
    MenuComponent,
    ModalDialogComponent,
    OnboardingComponent,
    PageHeaderComponent,
    PageLayoutComponent,
    PaginationComponent,
    PopupComponent,
    ProgressBarComponent,
    ProgressIndicatorComponent,
    ProgressTrackerComponent,
    RadioComponent,
    RangeComponent,
    SectionMessageComponent,
    SelectComponent,
    SpinnerComponent,
    TableTreeComponent,
    TabsComponent,
    TagComponent,
    TagGroupComponent,
    TextAreaComponent,
    TextFieldComponent,
    ToggleComponent,
    TooltipComponent,
    AvatarItemComponent,
    AvatarPresenceComponent,
    AvatarSkeletonComponent,
    AvatarStatusComponent,
    ButtongroupComponent,
    CodeBlockComponent,
    DatePickerComponent,
    TimePickerComponent,
    DropdownItemComponent,
    DropdownItemCheckboxComponent,
    DropdownItemGroupComponent,
    DropdownItemRadioComponent,
    AutoDismissFlagComponent,
    FlagGroupComponent,
    FlagsProviderComponent,
    CustomIconComponent,
    CustomSvgComponent,
    InlineEditableTextfieldComponent,
    CustomItemComponent,
    ButtonItemComponent,
    HeadingItemComponent,
    LinkItemComponent,
    MenuGroupComponent,
    PopupMenuGroupComponent,
    SectionComponent,
    SkeletonHeadingItemComponent,
    SkeletonItemComponent,
    BenefitsModalComponent,
    SpotlightCardComponent,
    SuccessProgressBarComponent,
    TransparentProgressBarComponent,
    RadioGroupComponent,
    ExamplesComponent,
    UsageComponent,
    ComponentsLayoutComponent,
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
