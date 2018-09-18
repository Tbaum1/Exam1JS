const checkOut = {
    firstName: "Contance",
    lastName: "McCrue",
    value: ["Milk", "Bread", "Cheese", "Ham, Lunch Meat"],
    cost: [3.32,1.29,3.35,4.26],
    printShoppingCart(){
        return `Name: ${this.firstName} ${this.lastName} <br/>Items Purchased: <br/>`
    }
    
}

function printItems(){
    for (i = 0; i < checkOut.value.length; i++) {            
        var items = checkOut.value[i] +  ' ' + '$' + checkOut.cost[i];
        document.write(items + "<br/>");
        console.log(items);
    };        
}
console.log(checkOut.printShoppingCart());
document.write(checkOut.printShoppingCart());
document.write(printItems());



