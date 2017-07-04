import { ServerServiceService } from './server-service.service';

import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerServiceService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveSeverButtonPress() {
    this.serverService.saveDataService(this.servers).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    );
  }

  onGetSeverButtonPress() {
    this.serverService.getDataService().subscribe(
        (servers: any[]) => {
                              this.servers = servers;
                              console.log()
                            },
        (error) => {
                     console.log(error);
                   }
    );
  }
}
