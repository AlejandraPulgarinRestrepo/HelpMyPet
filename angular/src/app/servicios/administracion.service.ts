import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascotas } from '../modelos/mascotas.model';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http:HttpClient) {

  }

  buscarMascota(): Observable<ModeloMascotas[]>{
   return this.http.get<ModeloMascotas[]>("http://localhost:3000/mascotas")
  }

  buscarMascotaPorId(id:string): Observable<ModeloMascotas>{
   return this.http.get<ModeloMascotas>(`http://localhost:3000/mascotas/${id}`)
  }

  crearMascota(mascota: ModeloMascotas): Observable<ModeloMascotas>{
   return this.http.post<ModeloMascotas>("http://localhost:3000/mascotas", mascota, {
     headers: new HttpHeaders({

     })
   })
  }

  actualizarMascota(mascota: ModeloMascotas): Observable<ModeloMascotas>{
   return this.http.put<ModeloMascotas>(`http://localhost:3000/mascotas/${mascota.id}`, mascota, {
     headers: new HttpHeaders({

     })
   })
  }

  eliminarMascotaPorId(id: string): Observable<any>{
   return this.http.delete(`http://localhost:3000/mascotas/${id}`, {
     headers: new HttpHeaders({

     })
   })
  }
}
