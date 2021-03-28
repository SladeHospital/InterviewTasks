import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColourPickerComponent } from './components/colour-picker/colour-picker.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { FootballMatchesComponent } from './components/football-matches/football-matches.component';

@NgModule({
  declarations: [
    AppComponent,
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
