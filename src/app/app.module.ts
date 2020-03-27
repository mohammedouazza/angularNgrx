import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { TodoReducer } from './reducers/todo.reducer'

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      todos: TodoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
