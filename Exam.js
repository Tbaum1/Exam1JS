const checkOut = {
    firstName: "Contance",
    lastName: "McCrue",
    value: ["Milk", "Bread", "Cheese", "Ham, Lunch Meat"],
    cost: [3.32,1.29,3.35,4.26],
    printShoppingCart(){
        var sumItems = 0;  
        document.write(`Name: ${this.firstName} ${this.lastName} <br/>Items Purchased: <br/>`);
        for (let i = 0; i < this.value.length; i++) {            
            var items = document.write(this.value[i] +  ' ' + '$' + this.cost[i] + "<br/>");
            //document.write(items + "<br/>");
            sumItems += this.cost[i];
            console.log(this.items);
        };      
        document.write(`Total: $${sumItems.toFixed(2)}`);   
        console.log("Total: $" + this.sumItems.toFixed(2));     
    }    
}
console.log(`Name: ${checkOut.firstName} ${checkOut.lastName} Items Purchased: `);
document.write(checkOut.printShoppingCart());




