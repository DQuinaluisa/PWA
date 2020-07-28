import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { error } from '@angular/compiler/src/util';
import { EstudianteService } from '../servicios/estudiante.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  user = [];

  constructor( private estudiante : EstudianteService ) { }

  ngOnInit(){
    this.estudiante.getAll()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.user = res

        },
        err => console.log(err)
      )
  }

}
