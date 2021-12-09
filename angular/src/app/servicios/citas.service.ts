import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ModeloCitas } from '../modelos/citas.modelo';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  url = "http//:localhost:3000"
  constructor(private http:HttpClient) {
    
   }

   buscarCita(): Observable<ModeloCitas[]>{
    return this.http.get<ModeloCitas[]>(`http://localhost:3000/registro-visitas`)
   }

   buscarCitaPorId(id:string): Observable<ModeloCitas>{
    return this.http.get<ModeloCitas>(`http://localhost:3000/registro-visitas/${id}`)
   }

   crearCita(cita: ModeloCitas): Observable<ModeloCitas>{
    return this.http.post<ModeloCitas>(`http://localhost:3000/registro-visitas`, cita, {
      headers: new HttpHeaders({

      })
    })
   }

   actualizarCita(cita: ModeloCitas): Observable<ModeloCitas>{
    return this.http.put<ModeloCitas>(`http://localhost:3000/registro-visitas/${cita.id}`, cita, {
      headers: new HttpHeaders({

      })
    })
   }

   eliminarCitaPorId(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/registro-visitas/${id}`, {
      headers: new HttpHeaders({

      })
    })
   }
}
