import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  num1:number;
  num2:number;
  sum:number=0;
  operand:string;
  calculator(num1:number,num2:number,operand:string):string{
    switch (operand) {
      case "+": return 'result ='+ (num1 + num2);
      case "-": return 'result ='+ (num1 - num2);
      case "*": return 'result ='+ (num1 * num2);
      case "/": if (num2==0){
        return "cant chia cho 0";
      }else return 'result ='+ (num1/num2);

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
