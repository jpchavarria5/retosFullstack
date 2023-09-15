import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {

  url: string = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  getPuntaje(): any {
    let adress = this.url + 'puntajes';
    return this.http.get<any[]>(adress);
  }

  getOnePuntaje(id: any): any {
    let adress = this.url + 'puntajes/' + id;
    return this.http.get<any[]>(adress);
  }

  postPuntaje(from: any): any {
    let adress = this.url + 'puntajes';
    return this.http.post(adress, from);
  }

  putPuntaje(id: any): any {
    let adress = this.url + 'puntajes/' + id ;
    return this.http.put(adress, id);
  }

  deletePuntaje(id: any): any {
    let adress = this.url + 'puntajes/' + id;
    return this.http.delete(adress);
  }
}
