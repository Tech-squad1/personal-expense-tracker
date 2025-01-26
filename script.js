const form = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

// Store expenses in an array (could use localStorage or backend in the future)
let expenses = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the expense name and amount from the inputs
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    // Add the expense to the expenses array
    expenses.push({ name: expenseName, amount: expenseAmount });

    // Update the UI
    displayExpenses();
    updateTotalExpense();

    // Clear input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});

function displayExpenses() {
    // Clear the existing list
    expenseList.innerHTML = '';

    // Display each expense
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

function updateTotalExpense() {
    // Calculate the total expense
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    totalExpense.textContent = total.toFixed(2);
}
