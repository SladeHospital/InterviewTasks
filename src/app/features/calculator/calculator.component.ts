import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  count = 0;
  result = 0;
  currentOperator = '+';
  showResult = false;
  numOne = 0;
  numTwo = 0;

  constructor() {}

  resetCalc(): void{
    this.result = 0;
    this.numOne = 0;
    this.numTwo = 0;
    this.currentOperator = '+';
    this.showResult = false;
  }

  calculateAnswer(op: number): void{
    switch (op) {
      case 0:
        this.result = this.numOne + this.numTwo;
        this.currentOperator = '+';
        break;
      case 1:
        this.result = this.numOne - this.numTwo;
        this.currentOperator = '-';
        break;
      case 2:
        this.result = this.numOne * this.numTwo;
        this.currentOperator = '*';
        break;
      case 3:
        this.result = this.numOne / this.numTwo;
        this.currentOperator = '/';
        break;
      default:
        break;
    }
    this.count++;
    this.showResult = true;
  }

  ngOnInit(): void{

  }
}
