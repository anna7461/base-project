import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-do-dont',
  templateUrl: './do-dont.component.html',
  styleUrls: ['./do-dont.component.scss']
})
export class DoDontComponent implements OnInit {

  @Input() doText: string;
  @Input() dontText: string;
  @Input() media: boolean;
  @Input() doMedia: string;
  @Input() dontMedia: string;

  constructor() { }

  ngOnInit(): void {
  }

}
