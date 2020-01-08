var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = "$" + total;

function getInnerText() {
  alert(document.getElementById("demo").innerText);
}

function getHTML() {
  alert(document.getElementById("demo").innerHTML);
}

function getTextContent() {
  alert(document.getElementById("demo").textContent);
}
