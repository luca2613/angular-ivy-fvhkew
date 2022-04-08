import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css'],
})
export class DisciplinaComponent implements OnInit {
  constructor(public disciplina: DisciplinaService) {}

  ngOnInit() {}
}
