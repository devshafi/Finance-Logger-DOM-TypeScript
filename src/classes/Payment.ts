import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed TK ${this.amount} for ${this.details}`;
  }
}
