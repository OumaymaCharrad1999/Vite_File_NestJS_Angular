import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';
import { ConnectGuichetComponent } from './connect-guichet/connect-guichet.component';
import { AjouterFileComponent } from './ajouter-file/ajouter-file.component';
import { ModifierFileComponent } from './modifier-file/modifier-file.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { InterfaceGuichetComponent } from './interface-guichet/interface-guichet.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NonAuthetifieComponent } from './non-authetifie/non-authetifie.component';
import { AjoutEchoueComponent } from './ajout-echoue/ajout-echoue.component';
import { InterfaceClientComponent } from './interface-client/interface-client.component';
import { InterfaceClient2Component } from './interface-client2/interface-client2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NewAccountComponent,
    ConnectAdminComponent,
    ConnectGuichetComponent,
    AjouterFileComponent,
    ModifierFileComponent,
    InterfaceAdminComponent,
    InterfaceGuichetComponent,
    NavbarComponent,
    NonAuthetifieComponent,
    AjoutEchoueComponent,
    InterfaceClientComponent,
    InterfaceClient2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
