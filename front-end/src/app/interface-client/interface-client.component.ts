import { Component,OnInit } from '@angular/core';
import { firstValueFrom, timeout } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-interface-client',
  templateUrl: './interface-client.component.html',
  styleUrls: ['./interface-client.component.css']
})
export class InterfaceClientComponent implements OnInit {

  constructor(private myService : ApiServiceService){}

  serviceChoisi=""; 
  idService!:string;
  serviceList!:any[];

  async ngOnInit(){
    this.serviceList = await firstValueFrom(this.myService.getServices().pipe(timeout(10000)));
    console.log(this.serviceList[0].compagny)
  }

  onChange(serviceChoisi: string){
    this.serviceChoisi = serviceChoisi;
    console.log(this.serviceChoisi)
    t
  }
  
  

}
