// classes
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#to-from") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector(".item-list") as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  let doc: HasFormatter;

  // using tuples
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  e.preventDefault();
  console.log(doc);

  const listTemplate = new ListTemplate(ul);
  listTemplate.render(doc, type.value, "start");
});
