import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {authGuichetModel} from './auth-guichet.model';

@Component({
  selector: 'app-connect-guichet',
  templateUrl: './connect-guichet.component.html',
  styleUrls: ['./connect-guichet.component.css']
})
export class ConnectGuichetComponent {

  constructor(private myService : ApiServiceService, private router:Router){}

  auth = new authGuichetModel();
  numFile !: number;
  numGuichet !: string;
  onClickSubmit(){
   
    this.router.navigateByUrl(`/interface-guichet/${encodeURIComponent(this.auth.idLocal)}/${this.auth.numGuichet}`);
    
  }

}
