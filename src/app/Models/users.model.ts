export class UserModel{
    username:string;
    useraddress:string;
    useremail:string;
    userpassword:string;
    usercontact:number;
    usergender:string;
    userrole:string;
    constructor(username:string,useraddress:string,useremail:string,userpassword:string,usercontact:number,usergender:string,
        userrole:string){
            this.username=username
            this.useraddress=useraddress
            this.useremail=useremail
            this.userpassword=userpassword
            this.usercontact=usercontact
            this.usergender=usergender
            this.userrole=userrole
    }
}


export class LoginModel{
    loginemail:string;
    loginpassword:string;
    constructor(loginemail:string,loginpassword:string){
        this.loginemail=loginemail
        this.loginpassword=loginpassword
    }
}