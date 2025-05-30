import { BaseKey } from "@refinedev/core";

const propertyTypesArray = ['Apartment','Villa','Farmhouse', 'Candos','Townhouse','Duplex','Studio','Chalet']

export type Property = {
    title:{type:String, required:true},
    description: {type:String, required:true},
    propertyType: {type:String, required:true},
    location: {type:String, required:true},
    price: {type:Number, required:true},
    photo: {type:String, required:true},
    creator: {type:string, ref:'User'},
}

export type User = {
    userid: BaseKey | undefined;
    email: string,
    name: string,
    avatar: string,
    allProperties: {type:Property}
}
export default propertyTypesArray;