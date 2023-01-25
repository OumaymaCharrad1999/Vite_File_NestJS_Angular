import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, timeout } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-interface-client',
  templateUrl: './interface-client.component.html',
  styleUrls: ['./interface-client.component.css']
})
export class InterfaceClientComponent implements OnInit {

  constructor(private myService : ApiServiceService, private router : Router){}

  serviceChoisi=""; 
  adFile!:string;
  idService!:string;
  fileChoisie:any;
  serviceList!:any[];
  fileList!:any[];

  async ngOnInit(){
    this.serviceList = await firstValueFrom(this.myService.getServices().pipe(timeout(10000)));
    console.log(this.serviceList[0].compagny)
  }

  async onChange(serviceChoisi: string){
    this.serviceChoisi = serviceChoisi;
    this.idService = this.serviceList.find(service => service.compagny==this.serviceChoisi).id
    console.log(this.idService)
    this.fileList = await firstValueFrom(this.myService.getFiles(this.idService).pipe(timeout(10000)));
    console.log(this.fileList)
  }

  async onChange2(adFile: string){
    this.adFile = adFile;
    this.fileChoisie = this.fileList.find(file => file.Adress==this.adFile)
    console.log(this.fileChoisie)
  }

  onClickSubmit(){
    this.fileChoisie = this.fileList.find(file => file.Adress==this.adFile)
    this.router.navigateByUrl(`/client2/${encodeURIComponent(this.fileChoisie.Id)}`)}
  }
  
  


