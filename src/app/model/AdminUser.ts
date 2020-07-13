// export interface AdminUser {
//     admin_user_account: String;
//     admin_user_password: String;
// }

export class AdminUser implements AdminUser {
    constructor() {
    }
    admin_user_account = '';
    admin_user_password = '';
    role_id = -1;
}
