import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';


@Injectable()
export class ServerServiceService {

  
  constructor(private http: Http) { }
 
  saveDataService(server: any[]) {
    const headers: Headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-server-database.firebaseio.com/serverData.json',
       server,
      { headers: headers });
  }
}
