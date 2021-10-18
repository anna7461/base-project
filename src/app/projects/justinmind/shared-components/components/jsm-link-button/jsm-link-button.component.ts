import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jsm-link-button',
  templateUrl: './jsm-link-button.component.html',
  styleUrls: ['./jsm-link-button.component.scss']
})
export class JsmLinkButtonComponent implements OnInit {

  public CSSClass: string;
  public underline: boolean;

  constructor() {
  }

  @Input() label: string;
  @Input() icon: string;
  @Input() size: string;
  @Input() underlined: boolean;

  ngOnInit(): void {
    this.initCSSClass();
  }

  private initCSSClass(): void {
    this.CSSClass = '';
    this.CSSClass += 'link-button-' + this.underlined;
    this.CSSClass += (this.size !== '') ? ' link-button-' + this.size : '';
  }
}
