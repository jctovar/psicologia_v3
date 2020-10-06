import { Injectable } from '@angular/core';
import { firestore } from "nativescript-plugin-firebase";

var cache = require("nativescript-cache");

@Injectable()
export class FirestoreService {
    uid = cache.get("uid");

    constructor() { }

    public GetDataCalendar(): Promise<any> {
        // return firebase.firestore().collection("speakers").get({ source: "server" }).then(querySnapshot => {
        return firestore.collection("calendario").get().then(querySnapshot => {
            let items = [];
            querySnapshot.forEach(doc => {
                //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                items.push( doc.data() )
            });
            
            return items;
        });
        
    }

    public SaveLike(item) {
        
        const usersCollection = firestore.collection("usuarios").doc(this.uid).collection("marcadores");

        return usersCollection.add({item
          }).then(documentRef => {
            //console.log(`Test ID: ${documentRef.id}`);

            return documentRef.id;
          });
    }

}