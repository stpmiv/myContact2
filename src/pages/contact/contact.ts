import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 /* items = ["Sathaporn",
          "nana",
          "papa",
          "naja","naka"
  ,       "juju"]; */

  items = [
      {name:"Sathaporn",tel:"0891695082",avatar:"01.png"},
      {name:"nana",tel:"08123456789",avatar:"02.png"},
      {name:"naja",tel:"08212345678",avatar:"03.png"},
      {name:"naha",tel:"08312345678",avatar:"04.png"},
      {name:"naka",tel:"08412345678",avatar:"05.png"},
  ];
  itemSelected(item : String){
    console.log("Selected Item: ",item);}
  constructor(public navCtrl: NavController) {
 
  }


}
