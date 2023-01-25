import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { fileModel } from '../ajouter-file/file.model';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-modifier-file',
  templateUrl: './modifier-file.component.html',
  styleUrls: ['./modifier-file.component.css']
})
export class ModifierFileComponent {

  constructor(private myService:ApiServiceService,private route : ActivatedRoute,private router : Router){}

  file = new fileModel()
  token!:string; email!:string; mdp!:string;

  ngOnInit(){
    this.token =  this.route.snapshot.paramMap.get('token')! ;
    this.email = this.route.snapshot.paramMap.get('email')! ;
    this.mdp = this.route.snapshot.paramMap.get('password')! ;
 }
   

  onClickSubmit(){
    console.log("bouton cliqué");
    this.myService.updateFile(this.file).subscribe((success)=>console.log(success),(error)=>console.log(error));
    this.router.navigateByUrl(`interface-admin/${this.token}/${this.email}/${this.mdp}`)
  }

}
