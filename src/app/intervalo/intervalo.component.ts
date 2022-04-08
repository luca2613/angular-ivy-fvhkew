import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-intervalo',
  templateUrl: './intervalo.component.html',
  styleUrls: ['./intervalo.component.css'],
})
export class IntervaloComponent implements OnInit {
  intervalo: number;
  constructor(public timer: TimerService) {}

  definirIntervalo() {
    this.timer.start(this.intervalo);
  }

  ngOnInit() {}
}
