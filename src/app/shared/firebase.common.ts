import * as firebase from "nativescript-plugin-firebase";
import { Message } from "nativescript-plugin-firebase";
//import { Config } from "./config";

/* ***********************************************************
* The {N} Firebase plugin initialization is explained in the plugin readme here:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase#usage
* Another important part of the initialization are the prerequisites:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase#prerequisites
* In this template, Firebase is set up with a custom existing project, so that
* You can build and run this template without creating your own Firebase project.
* Note that if you change the bundle id of the application, the Firebase configuration
* will stop working.
*************************************************************/

export function initFirebase() {
  firebase.init({
    showNotifications: true,
    showNotificationsWhenInForeground: true,
    onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when they re-visit your app
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
          console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    },
    onMessageReceivedCallback: (message: Message) => {
      console.log(`all... : ` + JSON.stringify(message));
      console.log(`Title: ${message.title}`);
      console.log(`Body: ${message.body}`);
      // if your server passed a custom property called 'foo', then do this:
      console.log(`Value of 'foo': ${message.data.foo}`);
    },
      //persist: false,
      //storageBucket: Config.firebaseBucket
      //storageBucket: 'gs://liverpool-colibri.appspot.com'
  }).then((instance) => console.log("firebase.init done"),
      (error) => console.log("firebase.init error: " + error));
    firebase.subscribeToTopic("news").then(() => console.log("Subscribed to topic"));     
}