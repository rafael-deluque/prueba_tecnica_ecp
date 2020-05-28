import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import * as firebase from "firebase/app";
import "firebase/auth";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  constructor(private _sharedService: SharedService,
    private _router: Router,
    private dataService: DataService,
    private platform: Platform) { 
  }

  ngOnInit() {
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBRleEds6b6VWLFVCWzSXyzF-qHTwoYc7g",
      authDomain: "techedge-es-open-poc-xcar.firebaseapp.com",
      databaseURL: "https://techedge-es-open-poc-xcar.firebaseio.com",
      projectId: "techedge-es-open-poc-xcar",
      storageBucket: "techedge-es-open-poc-xcar.appspot.com",
      messagingSenderId: "116817060114",
      appId: "1:116817060114:web:8f26dc8f30ffb10c17d3cb",
      measurementId: "G-RS0ZJL8E7T"
     };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ionViewDidEnter(){
    firebase
    .auth()
      .getRedirectResult()
        .then((result) =>  {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = (<firebase.auth.OAuthCredential>result.credential);
              this._sharedService.setSharedData({ accessToken: token });
              this._router.navigateByUrl("/equipment");
            }
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.error(JSON.stringify(error));
        });
  }

  login() {
    
    let provider = new firebase.auth.GoogleAuthProvider();

    if(!this.platform.is("mobile")){
      firebase
        .auth()
          .signInWithPopup(provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = (<firebase.auth.OAuthCredential>result.credential)
                .accessToken;
              this._sharedService.setSharedData({ accessToken: token });
              this._router.navigateByUrl("/equipment");
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
              console.error(JSON.stringify(error));
            });
    }else{
      firebase
      .auth()
      .signInWithRedirect(provider);
    }
    
    
 
  }

  proof(){
    this.dataService.getEquipmentWorkOrdersById("id").then(data => console.log(data));
  }
}
