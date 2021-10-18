import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jsm-button',
  templateUrl: './jsm-button.component.html',
  styleUrls: ['./jsm-button.component.scss']
})
export class JsmButtonComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
