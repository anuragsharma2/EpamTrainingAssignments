export class User{
    id!:number;
    userId!:string;
    mobileNo!:string;
    emailId!:string;
    password!:string;
    address!:string;
    gender!:string;
    constructor(id:number,userId:string,password:string,mobileNo:string,emailId:string,address:string,gender:string){
        this.id=id;
        this.userId=userId;
        this.password=password;
        this.emailId=emailId;
        this.mobileNo=mobileNo;
        this.address=address;
        this.gender=gender;
    }
}