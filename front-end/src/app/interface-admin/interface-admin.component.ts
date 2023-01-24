import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Observable, timeout } from 'rxjs';
import { fileModel } from '../ajouter-file/file.model';
import { ApiServiceService } from '../api-service.service';
import { authAdminModel } from '../connect-admin/auth-admin.model';
import { accountModel } from '../new-account/account.model';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.css']
})
export class InterfaceAdminComponent implements OnInit {

  constructor(private myService : ApiServiceService,private route : ActivatedRoute, private router:Router){    
    
  }

  fileList!:any[]
  account:any

  

  async ngOnInit(): Promise<void> {
    let token =  this.route.snapshot.paramMap.get('token') ;
    let email = this.route.snapshot.paramMap.get('email')! ;
    let mdp = this.route.snapshot.paramMap.get('password')! ;

    if(token){

      this.account = await firstValueFrom(this.myService.getAccount(email,mdp).pipe(timeout(10000)));

      console.log(await firstValueFrom(this.myService.getFiles(this.account.id).pipe(timeout(10000))))

      this.fileList = await firstValueFrom(this.myService.getFiles(this.account.id).pipe(timeout(10000)));
    
       
      console.log(this.account.name);
      console.log(this.account.id);
      console.log(this.fileList);
      
    }
  
   else{
    this.router.navigateByUrl(`admin-non-authentifie`)
    }
     

    
    
  }

}
