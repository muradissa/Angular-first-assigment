import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ControlreviewComponent } from './components/controlreview/controlreview.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { CardreviewComponent } from './components/cardreview/cardreview.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlreviewComponent,
    AddreviewComponent,
    CardreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

