import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freecodecamp-certifications-list',
  templateUrl: './freecodecamp-certifications-list.component.html',
  styleUrls: ['./freecodecamp-certifications-list.component.scss']
})
export class FreecodecampCertificationsListComponent implements OnInit {
  certificationsList = [
    {
      icon: '',
      label: 'Responsive Web Design Certifications',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'JavaScript Algorithms and Data Structures Certifications',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Front End Development Libraries Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Data Visualization Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Back End Development and APIs Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Quality Assurance Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Scientific Computing with Python Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Information Security Certification',
      hours: '300 hours'
    },
    {
      icon: '',
      label: 'Coding Interview Prep',
      hours: 'Thousands of hours of challenges'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
