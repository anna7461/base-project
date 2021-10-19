import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public showFreeCodeCamp: boolean;
  public showNnGroup: boolean;
  public showJustInMind: boolean;
  public showPluralsight: boolean;
  public showToptal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public openFreeCodeCamp(): boolean {
    return this.showFreeCodeCamp = true;
  }

  public openNnGroup(): boolean {
    return this.showNnGroup = true;
  }

  public openJustInMind(): boolean {
    return this.showJustInMind = true;
  }

  public openPluralsight(): boolean {
    return this.showPluralsight = true;
  }

  public openToptal(): boolean {
    return this.showToptal = true;
  }
}
