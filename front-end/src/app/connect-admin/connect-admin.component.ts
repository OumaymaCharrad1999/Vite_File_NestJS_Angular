import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {authAdminModel} from './auth-admin.model';

@Component({
  selector: 'app-connect-admin',
  templateUrl: './connect-admin.component.html',
  styleUrls: ['./connect-admin.component.css']
})
export class ConnectAdminComponent {

  constructor(private myService : ApiServiceService, private router:Router){}
  auth = new authAdminModel();
  onClickSubmit(){
    this.myService.authAdmin(this.auth).subscribe((token)=>{console.log(this.auth.mdp);this.router.navigateByUrl(`interface-admin/${token}/${this.auth.email}/${this.auth.mdp}`)},
                      (error)=>{this.router.navigateByUrl(`non-authentifie`)});
  }

}
