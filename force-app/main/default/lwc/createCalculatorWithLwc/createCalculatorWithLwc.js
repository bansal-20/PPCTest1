import { LightningElement, track } from 'lwc';

export default class CreateCalculatorWithLwc extends LightningElement {

    @track firstNumber;
    @track secondNumber;
    resultValue;

    handleNumberOneChange(event) {
        this.firstNumber = parseInt(event.target.value);
        console.log('this.firstNumber' +this.firstNumber);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
        console.log(' this.secondNumber ' +this.secondNumber );
    }
    addition() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        console.log('this.resultValueAdd' + this.resultValue);
    }
    multification() {
        this.resultValue = this.firstNumber * this.secondNumber;
        console.log('this.resultValueSUb' + this.resultValue);

    }
    subtraction() {
        this.resultValue = this.firstNumber - this.secondNumber;
        console.log('this.resultValueSUb' + this.resultValue);
    }
    division() {
        this.resultValue = this.firstNumber / this.secondNumber;
        console.log('this.resultValueDIV' + this.resultValue);
    }

}