export class Weapon {
    private weaponId : number;
    private weaponName : String;
    private weaponPrice : number; 
    private weaponCategory : number;


    constructor(data : any) {
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

      get getWeaponCategory(): number {
        return this.weaponCategory;
      }
    
      set setWeaponCategory(value: number) {
        this.weaponCategory = value;
      }

}
