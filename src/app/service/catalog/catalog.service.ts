import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../../model/catalog/catalog.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  url : string;
  constructor(private httpClient : HttpClient) {
    this.url = environment.apiUrl;
  }

  //GET
  getCatalog(){
    return this.httpClient.get<Catalog>(this.url);
  }

  //POST
  createCatalog(catalog : Catalog){
    return this.httpClient.post(this.url,catalog);
  }

  //PUT
  updateCatalog(id : number, catalog : Catalog){
    return this.httpClient.put(this.url + '/' + id ,catalog);
  }

  //DELETE
  deleteCatalog(id : number){
    return this.httpClient.delete(this.url + '/' + id);
  }
}
