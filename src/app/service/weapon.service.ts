import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Weapon } from '../model/weapon/weapon.model';
import { Categorie } from 'src/app/model/categorie/categorie.model'; // Update the path



@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  url : string;
  constructor(private httpClient : HttpClient) {
    this.url = environment.apiUrl;
  }

  //GET
  getWeapon(){
    return this.httpClient.get<Weapon>(this.url);
  }
  //GET
  getCategories(){
    return this.httpClient.get<Categorie[]>(this.url + '/category');
  }

  //POST
  createWeapon(weapon : Weapon){
    return this.httpClient.post(this.url,weapon);
  }

  //PUT
  updateWeapon(id : number, weapon : Weapon){
    return this.httpClient.put(this.url + '/' + id ,weapon);
  }

  //DELETE
  deleteWeapon(id : number){
    return this.httpClient.delete(this.url + '/' + id);
  }
}