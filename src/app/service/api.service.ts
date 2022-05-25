import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http : HttpClient) {}

  public getAdminAll() {
    return this.http.get(`/api/admin/getAdminAll`)
  }

  public login(admin : FormGroup ){
    return this.http.post(`/api/admin/login`, admin)
  }
    
  public createProfileAdmin(formData : FormData){
    return this.http.post(`/api/admin/createProfileAdmin`, formData)
  }
   
}
