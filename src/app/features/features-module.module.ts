import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballMatchesComponent } from './football-matches/football-matches.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    ColourPickerComponent,
    CalculatorComponent,
    FootballMatchesComponent,
  ],
  exports: [
    ColourPickerComponent,
    CalculatorComponent,
    FootballMatchesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
