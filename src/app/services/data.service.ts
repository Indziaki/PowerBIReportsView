import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = "https://mypowerbi.azurewebsites.net/api/values"

  constructor(private _http: HttpClient) { }

  getReports(){
    return this._http.get(this.api);
  }
}
