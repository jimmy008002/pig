export class PigInfo {
    farm_chinese_name: String;
    farm_english_name: String;
   
   date_time: Date;

    constructor( farm_name_en: String, farm_name_cn: String, date_time: Date) {
        this.farm_chinese_name = farm_name_cn;
        this.farm_english_name = farm_name_en;
        
        this.date_time = date_time;
    }
}