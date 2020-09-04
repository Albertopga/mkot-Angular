import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './routes/app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { BoardComponent } from './components/board/board.component';
import { WinComponent } from './components/win/win.component';
import { TableComponent } from './components/table/table.component';
import { MonsterComponent } from './components/monster/monster.component';

@NgModule({
  // componentes,pipes...
  declarations: [
    AppComponent,
    StartComponent,
    BoardComponent,
    WinComponent,
    TableComponent,
    MonsterComponent
  ],
  // modules and libraries loaded 
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  // services 
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
