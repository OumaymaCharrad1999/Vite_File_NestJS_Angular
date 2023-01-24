import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConnectAdminComponent } from '../connect-admin/connect-admin.component';
import { ConnectGuichetComponent } from '../connect-guichet/connect-guichet.component';
import { InterfaceAdminComponent } from '../interface-admin/interface-admin.component';
import { InterfaceGuichetComponent } from '../interface-guichet/interface-guichet.component';
import { NewAccountComponent } from '../new-account/new-account.component';
import { AjouterFileComponent } from '../ajouter-file/ajouter-file.component';
import { ModifierFileComponent } from '../modifier-file/modifier-file.component';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { NonAuthetifieComponent } from '../non-authetifie/non-authetifie.component';
import { AjoutEchoueComponent } from '../ajout-echoue/ajout-echoue.component';
import { InterfaceClientComponent } from '../interface-client/interface-client.component';
import { InterfaceClient2Component } from '../interface-client2/interface-client2.component';


export const appRouteList: Routes = [
  {
      path: 'connect-admin',
      component: ConnectAdminComponent
  },
  {
      path: 'connect-guichet',
      component: ConnectGuichetComponent
  },
  {
    path: 'interface-admin/:token/:email/:password',
    component: InterfaceAdminComponent
  },
  {
    path: 'interface-guichet/:idLocal/:numGuichet',
    component: InterfaceGuichetComponent
  },
  {
    path: 'new-account',
    component: NewAccountComponent
  },
  {
    path: 'ajouter-file',
    component: AjouterFileComponent
  },
  {
    path: 'ajouter-admin-echoue',
    component: AjoutEchoueComponent
  },
  {
    path: 'modifier-file',
    component: ModifierFileComponent
  },
  {
    path: 'non-authentifie',
    component: NonAuthetifieComponent
  },
  {
    path: 'client',
    component: InterfaceClientComponent
  },
  {
    path: 'client2',
    component: InterfaceClient2Component
  },
  {
      path: '**',
      component: HomeComponentComponent
  }
  
];

@NgModule({
  exports: [
    RouterModule
],
imports: [
    RouterModule.forRoot(appRouteList)
]
})
export class AppRoutingModule { }
