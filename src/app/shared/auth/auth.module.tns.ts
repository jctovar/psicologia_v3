import { Injectable } from "@angular/core";
import firebase from "nativescript-plugin-firebase";


@Injectable()
export class AuthModule { 

  constructor() {
    
  }

  checkLogin() {
    firebase.getCurrentUser()
      .then(user => console.log("User uid: " + user.uid))
      .catch(error => console.log("Trouble in paradise: " + error));
  }

  anonymous(): Promise<any> {
    return firebase.login(
      {
        type: firebase.LoginType.ANONYMOUS
      })
      .then(user => {
        console.log("User uid: " + user.uid)
        return true
      })
      .catch(error => 
        {console.log("Trouble in paradise: " + error)
        return false
      });
  }

  
}
