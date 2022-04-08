import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IntervaloComponent } from './intervalo/intervalo.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerService } from './timer.service';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaService } from './disciplina.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'intervalo', component: IntervaloComponent },
      { path: 'disciplina', component: DisciplinaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IntervaloComponent,
    HomeComponent,
    DisciplinaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinaService],
})
export class AppModule {}
