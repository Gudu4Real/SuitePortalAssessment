import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;
  maintenanceRequests;
  id;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MaintenanceRequest[]>('http://localhost:3333/api/maintenance-requests').subscribe(data => {
    this.maintenanceRequests = data;
    })
  }
  onSubmit(id: string){
    console.warn(id);
      return this.http.put('http://localhost:3333/api/maintenance-requests',id).subscribe(data => this.id = id);
    // return this.http.get<MaintenanceRequest[]>('http://localhost:3333/api/maintenance-requests')
  
  }
}

