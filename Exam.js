const checkOut = {
    firstName: "Anthony",
    lastName: "Tennenbaum",
    value: ["Milk", "Bread", "Cheese", "Ham, Lunch Meat"],
    cost: [3.32,1.29,3.35,4.36],
    sumItems: 0,
    printShoppingCart(){         
         console.log(`Name: ${this.firstName} ${this.lastName} \nItems Purchased: `);
        for (let i = 0; i < this.value.length; i++) {            
            let items = this.value[i] +  ' ' + '$' + this.cost[i];
            console.log(items );
            this.sumItems += this.cost[i];            
        }     
        return console.log(`Total: $${this.sumItems.toFixed(2)}`);
         
    }   
}  

checkOut.printShoppingCart();


