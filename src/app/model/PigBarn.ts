import { PigInfo } from './PigInfo';

export class PigBarn {
    pig_barn_id: number;
    pig_barn_name: String;
    pig_info_list: PigInfo[];

    constructor(pig_barn_id: number, pig_barn_name: String, pig_info_list: PigInfo[]) {
        this.pig_barn_id = pig_barn_id;
        this.pig_barn_name = pig_barn_name;
        this.pig_info_list = pig_info_list;
    }
}