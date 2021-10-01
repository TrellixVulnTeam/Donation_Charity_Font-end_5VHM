import { Organization } from "./organization.model";

export class Campaign{
    campaignId!:number;
    campaignName!:string;
    organization!: Organization;
    description!: string;
    title!: string;
    dateCreate!: Date;
    image!:string;
    donationCaseId!:string;
    cardNumber!:string;
    paymentId!:string;
}