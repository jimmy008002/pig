export class PigInfo {
    pig_id: number;
    farm_name_en: String;
    farm_name_cn: String;
    date_time: Date;

    constructor(pig_id: number, farm_name_en: String, farm_name_cn: String, date_time: Date) {
        this.pig_id = pig_id;
        this.farm_name_en = farm_name_en;
        this.farm_name_cn = farm_name_cn;
        this.date_time = date_time;
    }
}