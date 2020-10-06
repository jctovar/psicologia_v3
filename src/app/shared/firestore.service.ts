import { Injectable } from '@angular/core';
import { firestore } from "nativescript-plugin-firebase";
import { getUUID } from '@owen-it/nativescript-uuid';

var cache = require("nativescript-cache");

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

    public GetBookMarks(): Promise<any> {
        const uuid = getUUID();

        const usersCollection = firestore.collection("usuarios").doc(uuid).collection("marcadores").orderBy("item.date_published", "desc");

        return usersCollection.get().then(querySnapshot => {
            let items = [];
            querySnapshot.forEach(doc => {
                //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                items.push( doc.data() )
            });
            
            return items;
        });
        
    }

    public GetBookMark(id): Promise<any> {
        const uuid = getUUID();

        const usersCollection = firestore.collection("usuarios").doc(uuid).collection("marcadores").where("item.id", "==", id);

        return usersCollection.get().then(querySnapshot => {
            let items = [];
            querySnapshot.forEach(doc => {
                items.push( doc.data() )
                //console.log('######' + doc.id, " => ", doc.data());
            });
            
            return items;
        });
        
    }

    public SetBookMarks(item) {
        const uuid = getUUID();
        
        const usersCollection = firestore.collection("usuarios").doc(uuid).collection("marcadores");

        return usersCollection.add({item
          }).then(documentRef => {
            //console.log(`Test ID: ${documentRef.id}`);

            return documentRef.id;
          });
    }

}