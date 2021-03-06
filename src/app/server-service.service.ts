import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ServerServiceService {

  
  constructor(private http: Http) { }
 
  saveDataService(server: any[]) {
    const headers: Headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-server-database.firebaseio.com/serverData.json',
    //    server,
    //   { headers: headers });
    return this.http.put('https://angular-server-database.firebaseio.com/serverData.json',
       server,
      { headers: headers });
  }

  //put request will overwrite the existing data

  getDataService() {
    return this.http.get('https://angular-server-database.firebaseio.com/serverData.json')
    .map(
      (response: Response) => {
                                const data = response.json();
                                for(const server of data) {
                                  server.name = 'FETCHED_' + server.name;
                                }
                                return data;
                              }
    )
    .catch(
      (error) => { return Observable.throw('Something went wrong'); }
    )
  }

  getAppName() {
    return this.http.get('https://angular-server-database.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
                                  const appName = response.json();
                                  return appName;
                                }
      )
  }
}
