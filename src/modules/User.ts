export interface User {
    id:number;
    name:string;
    birthday:string;
    email:string;
}

export interface UserState extends User {
    error:User;
    IsValid: boolean;
}
