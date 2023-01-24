import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accountModel } from './new-account/account.model';
import { authAdminModel } from './connect-admin/auth-admin.model';
import { fileModel} from './ajouter-file/file.model';
import { Route, Router } from '@angular/router';
import { authGuichetModel } from './connect-guichet/auth-guichet.model';
import { etatFileModel } from './ajouter-file/etatFile.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient : HttpClient, private router : Router) { }

  API_SERVER = "http://localhost:3000";


  public addAccount(compte : accountModel){
    console.log(compte)
    return this.httpClient.post<accountModel>(`${this.API_SERVER}/compte`, {
                                                                "name": compte.nomAdmin,
                                                                "cin": compte.cinAdmin,
                                                                "phoneNumber": +compte.telAdmin,
                                                                "email": compte.emailAdmin,
                                                                "compagny": compte.nomEntreprise,
                                                                "taxIdentificationNumber": compte.immatFiscale,
                                                                "password": compte.mdp});
  }

  public addUser(authAdmin : authAdminModel){
    return this.httpClient.post<string>(`${this.API_SERVER}/user/`,{
      "email" : authAdmin.email,
      "password" : authAdmin.mdp});
  }


  public authAdmin(authAdmin : authAdminModel){
 
    return this.httpClient.post<string>(`${this.API_SERVER}/user/login/`,{
                                                                    "email" : authAdmin.email,
                                                                    "password" : authAdmin.mdp});
  }

  public authGuichet(authGuichet : authGuichetModel){
    return this.httpClient.get<accountModel>(`${this.API_SERVER}/compte/${authGuichet}`);
  }

  public getFiles(accountID : string){
    console.log(accountID)
    return this.httpClient.get<any[]>(`${this.API_SERVER}/files/${accountID}`);
  }

  public addFile(file : fileModel){
    return  this.httpClient.post<any>(`${this.API_SERVER}/files/add-file/`,{"Id":file.idService,
                                                                                "Adress":file.adresseFile});


  }

  public updateFile(file : fileModel){
    return this.httpClient.patch<fileModel>(`${this.API_SERVER}/files/update`,{"Id":file.idFile,
                                                                                "Adress":file.adresseFile});
  }

  public  getAccount(email:string, mdp:string){
    return this.httpClient.get<accountModel>(`${this.API_SERVER}/compte/${email}/${mdp}`);
  }

  public updateEtatFile(idFile:string, numGuichet:string){
    return this.httpClient.patch<any>(`${this.API_SERVER}/files/guichet-update/`,{"Id":idFile, "guichet":numGuichet});
  }

  public getEtatFile(idFile:string){
    console.log("entrée")
    return this.httpClient.get<any>(`${this.API_SERVER}/files/guichet/${encodeURIComponent(idFile)}`);
  }

  public getServices(){
    return this.httpClient.get<any[]>(`${this.API_SERVER}/compte`);
  }


}




