import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { fileModel } from './file.model';

@Component({
  selector: 'app-ajouter-file',
  templateUrl: './ajouter-file.component.html',
  styleUrls: ['./ajouter-file.component.css']
})
export class AjouterFileComponent {

  constructor(private myService : ApiServiceService, private route : ActivatedRoute, private router : Router){}

  file = new fileModel()

  token!:string; email!:string; mdp!:string;

ngOnInit(){
   this.token =  this.route.snapshot.paramMap.get('token')! ;
   this.email = this.route.snapshot.paramMap.get('email')! ;
   this.mdp = this.route.snapshot.paramMap.get('password')! ;
}
  onClickSubmit(){
    console.log("biutoncliqué")
    this.myService.addFile(this.file).subscribe((success)=>console.log(success),(error)=>console.log(error))
    this.router.navigateByUrl(`interface-admin/${this.token}/${this.email}/${this.mdp}`)
    console.log("submitted")
  }
  

}
