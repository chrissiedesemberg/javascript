/*
DONE - Change second add button to remove and lable
DONE Dont let it remove below zero
DONE - add check out button with total
add more items

*/

var nums = [1, 2, 3, 4, 5, 6];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta", "Snapple", "Chappie"];
var prices = [7.5, 9.5, 8.5, 7.5, 9.5, 0.5];
var quantities = [0, 0, 0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

//green total bar
var showTotal = document.getElementById("total");

function displayTotal() {
    alert("Thank you for shopping with us!");
    showTotal.innerHTML = "<br>Total order amount is R" + totalOrderAmt;
    showTotal.style.backgroundColor = "green";
    showTotal.style.color = "white";
    showTotal.style.padding = 1 + "em";
    showTotal.style.width = 25 + "%";
    showTotal.style.fontFamily = "Arial";
    showTotal.style.fontSize = 1.2 + "em";
}

// add & remove buttons
function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        display_all();
    }
}


function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";

    // displaying the total green bar
    document.getElementById("button").addEventListener("click", displayTotal);





    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}