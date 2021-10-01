import { Fanpage } from "./fanpage.model";

export class Organization{
    organizationId!:number;
    organizationName!:string;
    description!: string;
    address!:string;
    phoneNumber!:string;
    email!:string;
    password!:string;
    listfanpage!:Array<Fanpage>;

    constructor(organizationId:number,organizationName:string,description:string,address:string,phoneNumber:string,email:string,password:string,listfanpage:Array<Fanpage>){
        this.organizationId=organizationId;
        this.organizationName=organizationName;
        this.description=description;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.password=password;
        this.listfanpage=listfanpage;
    }
}