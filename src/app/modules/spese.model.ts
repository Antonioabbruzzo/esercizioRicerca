export interface ISpesa {
  amount: number;
  currency: string;
  balance: number;
  kind: string;
  causal: string;
  date: number;
}


export class Spesa {
  amount: number = 0;
  currency: string = '';
  balance: number = 0;
  kind: string = '';
  causal: string = '';
  date: number = 0;

  constructor(nuovaSpesa: ISpesa) {
    this.amount = nuovaSpesa.amount;
    this.currency = nuovaSpesa.currency;
    this.balance = nuovaSpesa.balance;
    this.kind = nuovaSpesa.kind;
    this.causal = nuovaSpesa.causal;
    this.date = nuovaSpesa.date;
  }
}