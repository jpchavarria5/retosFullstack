import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url: string = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }
  
  getEmpleados(): any {
    let adress = this.url + 'empleado';
    return this.http.get<any[]>(adress);
  }

  getOneEmpleado(id: any): any {
    let adress = this.url + 'empleado/' + id;
    return this.http.get<any[]>(adress);
  }

  postEmpleado(from: any): any {
    let adress = this.url + 'empleado';
    return this.http.post(adress, from);
  }

  putEmpleado(id: any): any {
    let adress = this.url + 'empleado/' + id ;
    return this.http.put(adress, id);
  }

  deleteEmpleado(id: any): any {
    let adress = this.url + 'empleado/' + id;
    return this.http.delete(adress);
  }
}
