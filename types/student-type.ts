import { department } from "./department-type"

export type studentResponse = {
    id:number;
    name:string;
    age:number;
    email:string;
    address:{
        street:string;
        city:string;
        postalCode:string;
        country:string;
    }
    department?: department
}