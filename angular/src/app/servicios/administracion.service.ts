import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDuenos } from '../modelos/duenos.modelo';
import { ModeloMascotas } from '../modelos/mascotas.model';
import { ModeloVeterinarios } from '../modelos/veterinarios.modelo';

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

  buscarVeterinario(): Observable<ModeloVeterinarios[]>{
    return this.http.get<ModeloVeterinarios[]>("http://localhost:3000/veterinarios")
   }

   crearVeterinario(veterinario: ModeloVeterinarios): Observable<ModeloVeterinarios>{
    return this.http.post<ModeloVeterinarios>("http://localhost:3000/veterinarios", veterinario, {
      headers: new HttpHeaders({

      })
    })
   }

   buscarVeterinarioPorId(id:string): Observable<ModeloVeterinarios>{
    return this.http.get<ModeloVeterinarios>(`http://localhost:3000/veterinarios/${id}`)
   }

   actualizarVeterinario(veterinario: ModeloVeterinarios): Observable<ModeloVeterinarios>{
    return this.http.put<ModeloVeterinarios>(`http://localhost:3000/veterinarios/${veterinario.id}`, veterinario, {
      headers: new HttpHeaders({

      })
    })
   }

   eliminarVeterinarioPorId(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/veterinarios/${id}`, {
      headers: new HttpHeaders({

      })
    })
   }

   crearDueno(dueno: ModeloDuenos): Observable<ModeloDuenos>{
    return this.http.post<ModeloDuenos>("http://localhost:3000/duenos", dueno, {
      headers: new HttpHeaders({

      })
    })
   }

   buscarDueno(): Observable<ModeloDuenos[]>{
    return this.http.get<ModeloDuenos[]>("http://localhost:3000/duenos")
   }

   buscarDuenoPorId(id:string): Observable<ModeloDuenos>{
    return this.http.get<ModeloDuenos>(`http://localhost:3000/duenos/${id}`)
   }

   actualizarDueno(dueno: ModeloDuenos): Observable<ModeloDuenos>{
    return this.http.put<ModeloDuenos>(`http://localhost:3000/duenos/${dueno.id}`,dueno, {
      headers: new HttpHeaders({

      })
    })
   }

   eliminarDuenoPorId(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/duenos/${id}`, {
      headers: new HttpHeaders({

      })
    })
   }

}
