import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerServiceService {

  constructor(private http: Http) { }

  saveDataService(server: any[]) {
    return this.http.post('https://angular-server-database.firebaseio.com/serverData.json', server);
  }
}
