import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
