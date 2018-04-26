import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: Http) {
    console.log('Hello NetworkEngineProvider Provider');
  }
  callGet(name, city): Promise<any>{
    console.log("Name = "+name + "City = "+city);

    let url = "http://httpbin.org/get?name="+name+"&city="+city;
    let request = this.http.get(url);
    return request.toPromise();
  }
  
  callPost(name, city): Promise<any>{
    console.log("Name = "+name + "City = "+city);

    let param = { namePerson: name, personCity: city}

    let url = "http://httpbin.org/post";

    let request = this.http.post(url,param);

    return request.toPromise();
  }

}
