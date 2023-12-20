import {Weapon} from "../weapon/weapon.model";

export class Categorie {

  private categoryId : number;

  private categoryName : string;

  private weapons : Array<Weapon> = []


  constructor(data : any) {
    this.categoryId = data.id ? data.id : null;
    this.categoryName = data.name ? data.name : null;
    if(data.weapons){
      data.weapons.forEach((weapon : Weapon) => {
        this.weapons.push(new Weapon(weapon));
      });
    }
  }


  get id(): number {
    return this.categoryId;
  }

  set id(value: number) {
    this.categoryId = value;
  }

  get name(): string {
    return this.categoryName;
  }

  set name(value: string) {
    this.categoryName = value;
  }

  get produits(): Array<Weapon> {
    return this.weapons;
  }

  set produits(value: Array<Weapon>) {
    this.weapons = value;
  }
}
