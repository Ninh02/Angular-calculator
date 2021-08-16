import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
 inputNumber:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  show(event:any){
    let number = event.target.value;
    this.inputNumber += number;
  }
  return(){
    this.inputNumber = '';
  }
  delete(){
    let number:any = this.inputNumber;
    this.inputNumber = number.substring(0,number.length-1);
  }
  calculator(){
   this.inputNumber = eval(this.inputNumber);
  }
}
