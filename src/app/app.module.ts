import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { FootballMatchesComponent } from './football-matches/football-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ColourPickerComponent,
    CalculatorComponent,
      FootballMatchesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
