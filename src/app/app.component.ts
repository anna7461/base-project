import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-project';

  public showProjects: boolean;
  public showGuides: boolean;

  public openProjects(): boolean {
    return (this.showProjects = true) && (this.showGuides = false);
  }

  public openGuides(): boolean {
    return (this.showGuides = true) && (this.showProjects = false);
  }
}
