import { Component, OnInit } from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private api: APIService) {   }

  ngOnInit() {
    
  }     
  
}
