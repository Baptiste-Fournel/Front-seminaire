import {Produit} from "../produit/produit.model";

export class Categorie {

  private _id : number;

  private _name : string;

  private _produits : Array<Produit> = []


  constructor(data : any) {
    this._id = data.id ? data.id : null;
    this._name = data.name ? data.name : null;
    if(data.produits){
      data.produits.forEach((produit : Produit) => {
        this._produits.push(new Produit(produit));
      });
    }
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get produits(): Array<Produit> {
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
}
