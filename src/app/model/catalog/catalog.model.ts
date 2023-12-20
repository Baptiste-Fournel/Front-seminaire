import {Categorie} from "../categorie/categorie.model";

export class Catalog {

  private _categorie : Array<Categorie> = [];

  constructor(data : any) {
   if(data.categorie){
     data.categorie.forEach((uneCategorie : Categorie) => {
       this.categorie.push(new Categorie(uneCategorie));
     });
   }
  }


  get categorie(): Array<Categorie> {
    return this._categorie;
  }

  set categorie(value: Array<Categorie>) {
    this._categorie = value;
  }
}
