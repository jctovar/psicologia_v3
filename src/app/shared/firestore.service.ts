import { Injectable } from '@angular/core';
import { firestore } from "nativescript-plugin-firebase";

@Injectable()
export class FirestoreService {

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

}