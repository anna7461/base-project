import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jsm-banner',
  templateUrl: './jsm-banner.component.html',
  styleUrls: ['./jsm-banner.component.scss']
})
export class JsmBannerComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() buttonLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
