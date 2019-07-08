import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
};
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowServer: boolean = true;
  servers: Server[] = [];
  placeholder: string = 'add server...';
  serverName: string = '';
  id: number = 1;
  @ViewChild('serverNameInput', {static:true}) servInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  private onAddServer(): void {
    console.log(this.servInput.nativeElement.value);
    if (!this.allowServer) return;
    const isOnline: boolean = Math.random() > 0.5 ? true : false;
    const status = isOnline && 'online' || 'offline';
    const newServer: Server = { id: this.id++, name: this.serverName, status };
    this.servers.push(newServer);
    this.serverName = '';
  }
  private onRemoveServer(id): void {
    this.servers = this.servers.filter(server => server.id !== id);
  }

  private getBgColor(server): string {
    return server.status === 'online' ? 'lightgreen' : 'orange';
  }

  private getClass(server): object {
    const check:boolean = server.status === 'online';
    const classObj = {
      'online': check,
      'offline': !check
    };
    return classObj;
  }
}
