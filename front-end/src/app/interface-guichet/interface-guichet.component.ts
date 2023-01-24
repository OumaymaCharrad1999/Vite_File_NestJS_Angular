import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-interface-guichet',
  templateUrl: './interface-guichet.component.html',
  styleUrls: ['./interface-guichet.component.css']
})
export class InterfaceGuichetComponent {

  constructor(private myService : ApiServiceService,private route : ActivatedRoute, private router:Router){}

  idLocal!:string; 
  monGuichet!:string;
  guichetActuel!:string; 
  numFile!:number;


  ngOnInit(): void {

    /*if (this.myService.isLoggedIn()){
      //let account ="";
      //account =  this.route.snapshot.paramMap.get('account');
      //const accountID = JSON.parse(account).id;
      let accountID = this.myService.getToken().accountId;

      this.myService.getFiles(accountID).subscribe((returnedFiles)=>{this.fileList=returnedFiles})

    }
    else{
      this.router.navigateByUrl(`admin-non-authentifie`)
    }*/

    

     this.idLocal =  this.route.snapshot.paramMap.get('idLocal')! ;
     this.monGuichet =  this.route.snapshot.paramMap.get('numGuichet')! ;
     console.log(this.idLocal)
     this.myService.getEtatFile(this.idLocal).subscribe((etatFile)=>{this.numFile=etatFile.numerofile;this.guichetActuel=etatFile.guichet})
     console.log(this.guichetActuel)
     console.log(this.idLocal)
  }

  onClickSubmit(){
    this.myService.updateEtatFile(this.idLocal,this.monGuichet).subscribe((etatFile)=>{this.numFile=etatFile.numerofile;
                                                                                          this.guichetActuel=etatFile.guichet;
                                                                                          console.log(this.numFile, this.guichetActuel)})
  }

  

}
