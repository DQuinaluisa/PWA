import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  constructor( private router : Router,
               private estudiante : EstudianteService
    ) { }

  ngOnInit(): void {
  }

  nombre: any;
  apellido: any;
  identificacion: any;
  direccion: any;

  create(){
    let data = {
      "usuario" : {
        "nombre": this.nombre,
        "apellido": this.apellido,
        "identificacion": this.identificacion,
        "direccion": this.direccion
      }
    }
    this.estudiante.crear(data).subscribe(
      response => {
        console.log('Creado');
        alert("Estudiante Creado");
      }
    ), error => {
      console.log(error);
    }
  }

}
