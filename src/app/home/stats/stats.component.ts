import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats = [
    { title: 'Assets under Management', stat: 2217815000.2 },
    { title: '401ks analyzed', stat: 115509 }
  ];
  constructor() {}

  mobile: Boolean = false;

  ngOnInit() {}
}
