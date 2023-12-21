import { Categorie } from '../categorie/categorie.model';

export class Weapon {
  public weaponId: number;
  private weaponName: String;
  private weaponPrice: number;
  private weaponCategory: Categorie;

  constructor(data: any) {
    this.weaponId = data.weaponId ? data.weaponId : null;
    this.weaponName = data.weaponName ? data.weaponName : null;
    this.weaponPrice = data.weaponPrice ? data.weaponPrice : null;
    this.weaponCategory = data.weaponCategory ? data.weaponCategory : null;
  }

  get getWeapondId(): number {
    return this.weaponId;
  }

  set setWeapondId(value: number) {
    this.weaponId = value;
  }

  get getWeapondName(): String {
    return this.weaponName;
  }

  set setWeaponName(value: String) {
    this.weaponName = value;
  }

  get getWeaponPrice(): number {
    return this.weaponPrice;
  }

  set setWeaponPrice(value: number) {
    this.weaponPrice = value;
  }

  get getWeaponCategory(): Categorie {
    return this.weaponCategory;
  }

  set setWeaponCategory(value: Categorie) {
    this.weaponCategory = value;
  }
}
