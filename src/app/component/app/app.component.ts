import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../service/catalog/catalog.service";
import {Catalog} from "../../model/catalog/catalog.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-catalog';

  catalog : Catalog = Object.create(null);
  isLoading : boolean = true;

  constructor(private catalogService : CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.getCatalog().subscribe(catalogBack => {
        this.catalog = new Catalog(catalogBack);
        this.isLoading = false;
    },error => {
      console.log("j'ai eu une erreur");
    });

  }
}



// import { Component, OnInit } from '@angular/core';
// import { CatalogService } from "../../service/catalog/catalog.service";
// import { Catalog } from "../../model/catalog/catalog.model";
// import { FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })



// export class AppComponent {
  // public champ1: string;
  // public champ2: string;

  // public createForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });

  // constructor(public formBuilder : FormBuilder){
  // this.champ1 = "";
  // this.champ2 = "";
  // }
  // constructor(private catalogService : CatalogService) {
  // }
  // ngOnInit(): void {
  //   this.catalogService.getCatalog().subscribe(catalogBack => {
  //       this.catalog = new Catalog(catalogBack);
  //       this.isLoading = false;
  //   },error => {
  //     console.log("j'ai eu une erreur");
  //   });

  // }

  // submit() {
  //   console.log('Champ 1:', this.champ1);
  //   console.log('Champ 2:', this.champ2);
  //   alert('bonjour')
  //   // Ajoutez ici la logique de confirmation ou envoyez les données au backend
  // }
// }


