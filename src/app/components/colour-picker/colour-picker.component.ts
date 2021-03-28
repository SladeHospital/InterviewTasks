import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {
  currentColour = 'red';
  constructor() { }

  changeColour(colour: string): void{
    this.currentColour = colour;
  }

  ngOnInit(): void {
  }
}

