import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  list(){
    return this.http.get<MaintenanceRequest[]>('http://localhost:3333/api/maintenance-requests')
  }

}
