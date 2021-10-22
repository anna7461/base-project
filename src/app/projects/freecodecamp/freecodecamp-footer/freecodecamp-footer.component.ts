import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freecodecamp-footer',
  templateUrl: './freecodecamp-footer.component.html',
  styleUrls: ['./freecodecamp-footer.component.scss']
})
export class FreecodecampFooterComponent implements OnInit {
  trendingGuidesList = [
    {
      label: 'Big O Notation',
      link: '',
    },
    {
      label: 'SQL Outer Join',
      link: '',
    },
    {
      label: 'Python For Loop',
      link: '',
    },
    {
      label: 'What is JavaScript?',
      link: '',
    },
    {
      label: 'Learn How To Code',
      link: '',
    },
    {
      label: 'Chrome Bookmarks',
      link: '',
    },
    {
      label: 'Concatenate Excel',
      link: '',
    },
    {
      label: 'C# String to Int',
      link: '',
    },
    {
      label: 'Git Switch Branch',
      link: '',
    },
    {
      label: 'JavaScript Splice',
      link: '',
    },
    {
      label: 'HTML Link',
      link: '',
    },
    {
      label: 'Bayes Rule',
      link: '',
    },
    {
      label: 'Python Map',
      link: '',
    },
    {
      label: 'HTML Italics',
      link: '',
    },
    {
      label: 'Python SQL',
      link: '',
    },
    {
      label: 'HTML Bold',
      link: '',
    },
    {
      label: 'GraphQL Vs Rest',
      link: '',
    },
    {
      label: 'if Function Excel',
      link: '',
    },
    {
      label: 'HTML List',
      link: '',
    },
    {
      label: 'Wav File',
      link: '',
    },
    {
      label: 'Model View Controller',
      link: '',
    },
    {
      label: 'Git Checkout Remote Branch',
      link: '',
    },
    {
      label: 'Insert Checkbox in Word',
      link: '',
    },
    {
      label: 'Find and Replace in Word',
      link: '',
    },
    {
      label: 'C Programming Language',
      link: '',
    },
    {
      label: 'Subnet Cheat Sheet',
      link: '',
    },
    {
      label: 'String to Char Array to Array',
      link: '',
    },
    {
      label: 'Add Page Numbers in Word',
      link: '',
    },
    {
      label: 'JavaScript Projects',
      link: '',
    },
    {
      label: 'JavaScript Append to Array',
      link: '',
    }
  ];

  nonProfitList = [
    {
      label: 'About',
      link: ''
    },
    {
      label: 'Alumni Network',
      link: '',
    },
    {
      label: 'Open Source',
      link: '',
    },
    {
      label: 'Shop',
      link: '',
    },
    {
      label: 'Support',
      link: '',
    },
    {
      label: 'Sponsors',
      link: '',
    },
    {
      label: 'Academic Honesty',
      link: '',
    },
    {
      label: 'Code of Conduct',
      link: '',
    },
    {
      label: 'Privacy Policy',
      link: '',
    },
    {
      label: 'Terms of Service',
      link: '',
    },
    {
      label: 'Copyright Policy',
      link: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
