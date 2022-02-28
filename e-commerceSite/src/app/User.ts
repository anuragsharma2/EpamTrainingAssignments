
export class User{
    userId!:string;
    password!:string;
    firstName!:string;
    lastName!:string;
    gender!:string;
    emailId!:string;
    mobileNumber!:string;
    address!:string;
    constructor(userId:string,firstName:string,lastName:string,password:string,mobileNo:string,emailId:string,address:string,gender:string){
        this.userId=userId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.emailId=emailId;
        this.mobileNumber=mobileNo;
        this.address=address;
        this.gender=gender;
    }
}