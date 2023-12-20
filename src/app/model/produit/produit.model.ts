export class Produit {

  private _nom;

  private _description;

  constructor(data : any){
    this._nom = data.nom ? data.nom : null;
    this._description = data.description ? data.description : null;
  }

  get nom() {
    return this._nom;
  }

  set nom(value) {
    this._nom = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }
}
