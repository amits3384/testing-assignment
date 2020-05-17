import { Injectable } from '@angular/core';
import { USER_DETAILS } from './user-details.model';

export interface USER{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: USER[] = [
    new USER_DETAILS("amit@abc.com", "amit123"),
    new USER_DETAILS("arpit@abc.com", "arpit123")
  ]

  constructor() { }

  verifyCredentials(inputData: USER_DETAILS): boolean{
       
    for(let i=0; i<this.userData.length; i++){
      if(inputData.email === this.userData[i].email && inputData.password === this.userData[i].password){
        return true;
      }
      else{
        return false;
      }
    }    
  }
}
