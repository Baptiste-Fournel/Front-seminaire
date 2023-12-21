import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Weapon } from '../model/weapon/weapon.model';
import { WeaponDTO } from '../model/weaponDTO/weapon-dto.model';
import { Categorie } from 'src/app/model/categorie/categorie.model'; // Update the path
import { CategorieDTO } from 'src/app/model/categorieDTO/categorie-dto.model'; //
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  //GET
  getWeapon() {
    return this.httpClient.get<Weapon>(this.url);
  }
  //GET
  getCategories() {
    return this.httpClient.get<Categorie[]>(this.url + '/category');
  }

  //POST
  createCategorie(categorie: CategorieDTO): Observable<any> {
    return this.httpClient.post(this.url + '/category', categorie);
  }

  //POST
  createWeapon(weapon: WeaponDTO) {
    return this.httpClient.post(this.url, weapon);
  }

  //PUT
  updateWeapon(id: number, weapon: WeaponDTO) {
    return this.httpClient.put(this.url + '/' + id, weapon);
  }

  //DELETE
  deleteWeapon(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}