import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  netResponse:any;
  constructor(public navCtrl: NavController, public provider: NetworkEngineProvider) {

  }

  callGetService(name, city){
      let p = this.provider.callGet(name,city);

      p.then(data => {
        console.log("Recieved" + JSON.stringify(data.json().args));
        this.netResponse = JSON.stringify(data.json().args);
      })
  }

  callPostService(name, city){
    let p = this.provider.callPost(name,city);
    
    p.then(data => {
      console.log("Recieved" + JSON.stringify(data.json().data));
      this.netResponse = data.json().data;
    })
}


}
