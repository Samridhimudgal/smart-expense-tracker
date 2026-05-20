const express = require('express');
const Expense = require('../models/Expense');

const router = express.Router();

router.get('/', async (req, res) => {

  try {

    const expenses = await Expense.find();

    if (!expenses.length) {
      return res.json([
        "No expenses available for analysis",
      ]);
    }

    const insights = [];

    // Total Expense
    const totalExpense = expenses.reduce(
      (acc, item) => acc + item.amount,
      0
    );

    // Category Analysis
    const categoryTotals = {};

    expenses.forEach((item) => {

      const category = item.category || "Other";

      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
      }

      categoryTotals[category] += item.amount;
    });

    // Highest Spending Category
    let highestCategory = "";
    let highestAmount = 0;

    for (const category in categoryTotals) {

      if (categoryTotals[category] > highestAmount) {

        highestAmount = categoryTotals[category];
        highestCategory = category;
      }
    }

    const percentage = (
      (highestAmount / totalExpense) * 100
    ).toFixed(0);

    insights.push(
      `You spent most on ${highestCategory} (${percentage}% of total expenses)`
    );

    // Overspending Detection
    if (totalExpense > 20000) {

      insights.push(
        "Your monthly expenses are quite high"
      );
    }

    // Food Analysis
    if (categoryTotals["Food"] > 5000) {

      insights.push(
        "Food expenses are higher than usual"
      );
    }

    // Shopping Analysis
    if (categoryTotals["Shopping"] > 3000) {

      insights.push(
        "Shopping expenses increased significantly"
      );
    }

    // Savings Suggestion
    insights.push(
      `You can save around ₹${Math.floor(totalExpense * 0.1)} by reducing unnecessary spending`
    );

    res.json(insights);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;