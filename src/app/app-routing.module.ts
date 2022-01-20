import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BuildingDesignSystemPartThreeColorsComponent
} from './projects/uxmisfit/blog/articles/design-systems/building-design-system-part-three-colors/building-design-system-part-three-colors.component';
import {
  IsItWorthLearningWithUiTipsComponent
} from './projects/uxmisfit/blog/articles/ui/tips/is-it-worth-learning-with-ui-tips/is-it-worth-learning-with-ui-tips.component';
import {
  UiDesignInPracticeTypographyComponent
} from './projects/uxmisfit/blog/articles/ui/ui-design-in-practice-typography/ui-design-in-practice-typography.component';
import {HomeComponent} from './projects/uxmisfit/main-views/home/home.component';
import {UxToolsComponent} from './projects/uxmisfit/main-views/ux-tools/ux-tools.component';
import {AboutComponent} from './projects/uxmisfit/main-views/about/about.component';
import {
  BuildingDesignSystemPartOneBeforeYouStartComponent
} from './projects/uxmisfit/blog/articles/design-systems/building-design-system-part-one-before-you-start/building-design-system-part-one-before-you-start.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'ux_tools',
    pathMatch: 'full',
    component: UxToolsComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'building_design_system_part_one_before_you_start',
    pathMatch: 'full',
    component: BuildingDesignSystemPartOneBeforeYouStartComponent,
  },
  {
    path: 'building_design_system_part_three_colors',
    pathMatch: 'full',
    component: BuildingDesignSystemPartThreeColorsComponent,
  },
  {
    path: 'is_it_worth_learning_with_ui_tips',
    pathMatch: 'full',
    component: IsItWorthLearningWithUiTipsComponent,
  },

  {
    path: 'ui_design_practice_typography',
    pathMatch: 'full',
    component: UiDesignInPracticeTypographyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
