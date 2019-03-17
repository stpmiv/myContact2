import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = ["Sathaporn","nana","papa","naja","naka","juju"];
  constructor(public navCtrl: NavController) {

  }

}
