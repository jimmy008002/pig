export class masterfile {

        farm_id: number;
        farm_chinese_name:String;
        farm_english_name:String;
    
        constructor(farm_id: number, farm_english_name: String,  farm_chinese_name: String) {
            this.farm_id = farm_id;
            this.farm_english_name =  farm_english_name;
            this.farm_chinese_name =  farm_chinese_name;
        }
        
    } 