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
  token!:string
  email!:string
  mdp!:string

  async ngOnInit(): Promise<void> {
     this.token =  this.route.snapshot.paramMap.get('token')! ;
     this.email = this.route.snapshot.paramMap.get('email')! ;
     this.mdp = this.route.snapshot.paramMap.get('password')! ;

    if(this.token){


      this.account = await firstValueFrom(this.myService.getAccount(this.email,this.mdp).pipe(timeout(10000)));

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

  submitAjouter(){
    this.router.navigateByUrl(`ajouter-file/${this.token}/${this.email}/${this.mdp}`)
  }

  submitModifier(){
    this.router.navigateByUrl(`modifier-file/${this.token}/${this.email}/${this.mdp}`)
  }
}
