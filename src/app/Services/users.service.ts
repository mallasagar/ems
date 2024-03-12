import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_ENDPOINTS } from '../api/apiconstant';
import { Observable } from 'rxjs';
import { UserModel } from '../Models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http:HttpClient) { }


adduser(data:any):Observable<UserModel>{
    const url = `${API_BASE_URL}${API_ENDPOINTS.USERS}`;
    return this.http.post<UserModel>(url,data) 
   }

  //  get all the users
getallUsers(){
    const url = `${API_BASE_URL}${API_ENDPOINTS.USERS}`;
    return this.http.get(url)
  }


}
