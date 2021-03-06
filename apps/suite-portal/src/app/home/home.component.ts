import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  onSubmit(data : any){
    this.http.post('http://localhost:3333/api/maintenance-requests',data).subscribe((result)=>{
      console.warn('result', result)
    })
  }

}
