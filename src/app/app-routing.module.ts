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

const routes: Routes = [
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
