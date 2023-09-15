import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  url: string = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  getPremio(): any {
    let adress = this.url + 'premio';
    return this.http.get<any[]>(adress);
  }

  getOnePremio(id: any): any {
    let adress = this.url + 'premio/' + id;
    return this.http.get<any[]>(adress);
  }

  postPremio(from: any): any {
    let adress = this.url + 'premio';
    return this.http.post(adress, from);
  }

  putPremio(id: any): any {
    let adress = this.url + 'premio/' + id ;
    return this.http.put(adress, id);
  }

  deletePremio(id: any): any {
    let adress = this.url + 'premio/' + id;
    return this.http.delete(adress);
  }
}
