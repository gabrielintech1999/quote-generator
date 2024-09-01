import { quotes } from "./data.js";

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const quoteDisplay = document.getElementById("quote");
const authordisplay = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("OK");

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  quoteDisplay.textContent = quote.text;
  authordisplay.textContent = quote.author;
});
