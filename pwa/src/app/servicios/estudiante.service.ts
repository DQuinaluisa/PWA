import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../modelos/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url = 'http://localhost:3500/api/'

  constructor( private http : HttpClient ) { }

  crear(data){
    return this.http.post(this.url + 'usr', data);
  }

  getAll(): Observable<Object> {
    return this.http.get<Estudiante[]>(this.url + 'usr');
  }

}
