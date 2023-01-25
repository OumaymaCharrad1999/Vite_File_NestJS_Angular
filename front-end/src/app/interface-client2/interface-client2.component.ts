import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { firstValueFrom, timeout } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-interface-client2',
  templateUrl: './interface-client2.component.html',
  styleUrls: ['./interface-client2.component.css']
})
export class InterfaceClient2Component implements OnInit {

  constructor(private myService : ApiServiceService, private route : ActivatedRoute, private router : Router){}

  idFile!:string; idFileEncoded!:string;
  etatFile:any;


  async ngOnInit() {
     console.log("entrée OnInit")
     this.idFile =  this.route.snapshot.paramMap.get('idFile')! ;
     this.idFileEncoded = encodeURIComponent(this.idFile)
     this.etatFile = await firstValueFrom(this.myService.getEtatFile(this.idFile).pipe(timeout(10000)));
     console.log(this.etatFile)
    
  }

  onClickSubmit(){
    console.log("bouton cliqué");
    location.reload();
  }

}
