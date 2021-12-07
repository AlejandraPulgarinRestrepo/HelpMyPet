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
    return this.http.get<ModeloCitas[]>(`${this.url}/registro-visitas`)
   }

   crearCita(cita: ModeloCitas): Observable<ModeloCitas>{
    return this.http.post<ModeloCitas>(`${this.url}/registro-visitas`, cita, {
      headers: new HttpHeaders({

      })
    })
   }

   actualizarCita(cita: ModeloCitas): Observable<ModeloCitas>{
    return this.http.put<ModeloCitas>(`${this.url}/registro-visitas`, cita, {
      headers: new HttpHeaders({

      })
    })
   }

   eliminarCita(id: string): Observable<any>{
    return this.http.delete(`${this.url}/registro-visitas/${id}`, {
      headers: new HttpHeaders({

      })
    })
   }
}
