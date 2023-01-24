import { Component } from '@angular/core';
import { fileModel } from '../ajouter-file/file.model';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-modifier-file',
  templateUrl: './modifier-file.component.html',
  styleUrls: ['./modifier-file.component.css']
})
export class ModifierFileComponent {

  constructor(private myService:ApiServiceService){}

  file = new fileModel()

  onClickSubmit(){
    console.log(this.file);
    this.myService.updateFile(this.file).subscribe((success)=>console.log(success),(error)=>console.log(error));
  }

}
