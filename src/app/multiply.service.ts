import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyService {

  private multiplyUrl = 'https://albums-f0eba.firebaseio.com/multiply';

  public multiplications = [
    {
      multiplication: '10x10',
      result: ['100']
    },
    {
      multiplication: '5x7',
      result: ['35']
    },
    {
      multiplication: '2x8',
      result: ['16']
    },
    {
      multiplication: '4x3',
      result: ['12']
    },
    {
      multiplication: '8x3',
      result: ['24']
    },
    {
      multiplication: '10x6',
      result: ['60']
    },
    {
      multiplication: '7x10',
      result: ['70']
    },
    {
      multiplication: '8x10',
      result: ['80']
    },
    {
      multiplication: '10x9',
      result: ['90']
    },
    {
      multiplication: '1x2',
      result: ['2']
    }
  ];

  results = [];

  multiplicationId: number;

  constructor() { }

  validate(result, answer) {
    let booleanResult = false;
    if (result == answer) {
      booleanResult = true;
    }
    this.results.push({ multiplication: this.multiplications[this.multiplicationId].multiplication, result, answer, booleanResult });
  }
}
