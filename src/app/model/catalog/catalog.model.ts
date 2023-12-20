import {Weapon} from "../weapon/weapon.model";

export class Catalog {

  private _weapon : Array<Weapon> = [];

  constructor(data : any) {
   if(data){
     data.forEach((uneWeapon : Weapon) => {
       this._weapon.push(new Weapon(uneWeapon));
     });
   }
  }


  get weapons(): Array<Weapon> {
    return this._weapon;
  }

  set weapons(value: Array<Weapon>) {
    this._weapon = value;
  }
}
