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

//Task 2 - Sales Tax Computation

//Function expression to calculate sales tax from a certain amount and tax rate
let calculateSalesTax = function(amount, taxRate) {

    //Multiplying the amount by tax rate and rounding it down to the nearest whole number
    let salesTax = Math.floor(amount * taxRate);

    //Returning the sales tax
    return salesTax;
};

//Test Cases - Values can be changed
//Logging the sales tax for a $100 amount at a 7% tax rate to the console
console.log(`Sales tax: $${calculateSalesTax(100, 0.07)}`);

//Logging the sales tax for a $500 amount at a 10% tax rate to the console
console.log(`Sales tax: $${calculateSalesTax(500, 0.1)}`);

//Task 3 - Employee Bonus Calculation

//Arrow function to calculate the employee bonus based on the performance rating
let calculateBonus = (salary, performanceRating)=> {

    //Declaring the bonus variable
    let bonus;

    //Determining the bonus percentage based on performance rating
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20; //20% bonus for an excellent rating
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10; //10% bonus for a good rating
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; //5% bonus for an average rating
    }

    //Returning the bonus
    return bonus;
};

//Test Cases - Values can be changed
//Logging the bonus for a salary of $5000 with an excellent performance rating
console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`);

//Logging the bonus for a salary of $7000 with a good performance rating
console.log(`Bonus: $${calculateBonus(7000, "Good")}`);

//Task 4 - Subscription Pricing Model

//Function to calculate the subscripton cost based on the type of plan, the duration, and the discount
let calculateSubscriptionCost = function(plan, months, discount = 0) {

    //Defining the rates for the different plans
    let rates = { "Basic": 10, "Premium": 20, "Enterprise": 50 };

    //Multiplying the rate by months and applying the discount
    let totalCost = (rates[plan] * months) - discount;

    //Returning the total cost
    return totalCost;
};

//Test Cases - Values can be changed
//Logging the cost of the Basic plan for 6 months with a $10 discount to the console
console.log(`Total cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);

//Logging the cost of the Premium plan for 12 months with no discount to the console
console.log(`Total cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);

//Task 5 - Currency Conversion

//Function to convert currency based on the exchange rate
let convertCurrency = function(amount, exchangeRate) {

    //Multiplying the amount by the exchange rate and rounding it to 2 decimal places
    let convertedAmount = (amount * exchangeRate).toFixed(2);

    //Returning the converted amount
    return convertedAmount;
};

//Test Cases - Values can be changed
//Logging the conversion of $100 with an exchange rate of 1.1 to the console
console.log(`Converted amount: $${convertCurrency(100, 1.1)}`);

//Logging the conversion of $250 with an exchange rate of 0.85 to the console
console.log(`Converted amount: $${convertCurrency(250, 0.85)}`);

//Task 6 - Higher-Order Function for Bulk Orders

//Function to apply a bulk discount for orders over $500
let orders = [200, 600, 1200, 450, 800];

//Applying the discount function to each order
let applyBulkDiscount = (orders, discountFunction) => {
    let discountedOrders = orders.map(discountFunction);

    //Logging the updated order values to the console
    console.log(`Expected output: ${discountedOrders}`);
};

//Applying a 10% discount for orders that are over $500
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

//Task 7 - Business Expense Tracker

//Function that returns an expense tracker to keep a running total of expenses
function createExpenseTracker() {
    //Initalize the total expenses
    let totalExpenses = 0;

    return function(expense) {
        //Adding the new expense to the total
        totalExpenses += expense;

        //Returning the total expenses
        return totalExpenses
    };
};

//Creating a new tracker instance
let tracker = createExpenseTracker();

//Test Cases - Values can be changed
//Logging the total expense after adding $200 to the console
console.log(`Total expenses: ${tracker(200)}`);

//Logging the total expense after adding $150 to the console
console.log(`Total expenses: ${tracker(150)}`);