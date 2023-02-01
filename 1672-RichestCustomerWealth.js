let maximumWealth = function(accounts) {
    return accounts
    .map(customer => {
        return customer.reduce( (total, account) => total + account, 0);
    })
    .sort((a, b) => b - a)[0]
};

console.log(maximumWealth([[3, 2, 2], [3, 2, 5]]))