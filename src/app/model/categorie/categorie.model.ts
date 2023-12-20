import {Weapon} from "../weapon/weapon.model";

export class Categorie {

  private _id : number;

  private _name : string;

  private weapons : Array<Weapon> = []


  constructor(data : any) {
    this._id = data.id ? data.id : null;
    this._name = data.name ? data.name : null;
    if(data.weapons){
      data.weapons.forEach((weapon : Weapon) => {
        this.weapons.push(new Weapon(weapon));
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

  get produits(): Array<Weapon> {
    return this.weapons;
  }

  set produits(value: Array<Weapon>) {
    this.weapons = value;
  }
}
