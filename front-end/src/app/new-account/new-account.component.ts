import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { accountModel } from './account.model';
import { authAdminModel } from '../connect-admin/auth-admin.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent  {

  constructor(private myService:ApiServiceService, private router:Router){}

  mdp!:string; confirmMdp!:string;
  mdpConfirmed = true;

  compte = new accountModel();
  authModel = new authAdminModel()




  onClickSubmit(){
    this.mdpConfirmed = this.mdp==this.confirmMdp;
    if(this.mdpConfirmed) this.compte.mdp=this.mdp;

    this.myService.addAccount(this.compte).subscribe((addedAccount)=>{this.router.navigateByUrl(`connect-admin`)},
                      (error)=>{this.router.navigateByUrl(`ajout-admin-echoue`);console.log(error)});
    
    this.authModel.email = this.compte.emailAdmin;
    this.authModel.mdp = this.compte.mdp;
    this.myService.addUser(this.authModel).subscribe((idEmail)=>{console.log(idEmail);console.log('addUser done')})
                      
    
  }

}
