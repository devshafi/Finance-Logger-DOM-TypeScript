import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice implements HasFormatter {
  readonly client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes TK ${this.amount} for ${this.details}`;
  }
}
