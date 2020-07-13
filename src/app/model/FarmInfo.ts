export class FarmInfo {
    farm_id: number;
    farm_name_en: String;
    farm_name_cn: String;

    constructor(farm_id: number, farm_name_en: String, farm_name_cn: String) {
        this.farm_id = farm_id;
        this.farm_name_en = farm_name_en;
        this.farm_name_cn = farm_name_cn;
    }
}