import { Injectable } from '@angular/core';
import { listData } from './list';

interface Disciplina {
  nome: string;
  diaSemana: string;
  horario: string;
}

@Injectable()
export class DisciplinaService {
  list: Array<Disciplina> = listData;
  constructor() {}

  getList() {
    return this.list;
  }
  add(disciplina: Disciplina) {
    this.list.push(disciplina);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
