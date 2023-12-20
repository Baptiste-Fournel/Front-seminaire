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