// Practice
// Your job is to create an object that represents a financial advisor and has the following properties and methods.





// When you invoke the worth() method, it should look at every transaction and calculate the advisor 's net worth.


// Company(enumerable, writable, property)
const financeAdv = Object.create({}, {
    company: {
        value: "Jackson Holdings Inc.",
        enumerable: true,
        writable: true

    },
    // Specialty(enumerable, writable, property)
    specialty: {
        value: "Stock trading",
        enumerable: true,
        writable: true
    },
    // Name(enumerable, property)
    name: {
        value: "Fred Rogers",
        enumerable: true,
        writable: true
    },
    // Portfolio(non - enumerable, property) - Should display the stocks the advisor currently holds
    portfolio: {
        value: [],
        enumerable: true,
        writable: true
    },
    // Worth(non - enumerable, method)
    worth: {
        value: "900,000",
        enumerable: true,
        writable: true
    },

    // Purchase(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments

    purchase: {
        value: function(stockTicker, qty, price) {
            let ticker = {
                name: stockTicker,
                amount: qty,
                price
            }
            financeAdv.portfolio.push(ticker);
            console.log(financeAdv.portfolio)
        }
    },
    // Sell(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments

    sell: {
        value: function(stockTicker, qty, price, sell) {
            let ticker = {
                    name: stockTicker,
                    amount: qty,
                    price,
                    sell
                },


        },

    }
});

console.log(financeAdv)

financeAdv.purchase("bud", 50, 100)
    // When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly.Start off with making portfolio property an array that holds transactions.