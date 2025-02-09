//Task 1 - Business Profit Calculation

//Function to calculate profit based on the cost price, selling price, and units sold
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    //Finding the profit by subtracting the cost price from the selling price and multiplying by units sold
    let profit = (sellingPrice - costPrice) * unitsSold;
    
    //Returning the calculated profit
    return profit;
};

//Test Cases - Values can be changed
//Logging the total profit for 100 units with the cost price as 20 and the selling price as 30 to the console
console.log(`Total profit: $${calculateProfit(20, 30, 100)}`);

//Logging the total profit for 200 units with the cost price as 50 and the selling price as 70 to the console
console.log(`Total profit: $${calculateProfit(50, 70, 200)}`);