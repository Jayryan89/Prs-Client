import { User } from "../user/user.class";
import { Requestline } from "../requestline/requestline.class";

export class Request {

    id: number=0;
    description: string='';
    justification: string='';
    rejectionReason: string='';
    deliveryMode: string ="Pickup";
    status: string='NEW';
    total: number=0.00;
    userId: number=0;
    user!: User;
    username: string='';
    requestlines!: Requestline[];

    statusStyles: string="";
 
    constructor() {}

}