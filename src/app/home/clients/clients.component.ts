import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [
    new Client('../../../assets/images/logo-linkedin.png'),
    new Client('../../../assets/images/logo-amazon.png'),
    new Client('../../../assets/images/logo-apple.png'),
    new Client('../../../assets/images/logo-cisco.png'),
    new Client('../../../assets/images/logo-oracle.png')
  ];

  constructor() {}

  ngOnInit() {}
}
