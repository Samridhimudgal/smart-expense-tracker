import Expense from '../models/Expense.js';
import calculateInsights from '../utils/calculateInsights.js';

export const getAIInsights = async (req, res) => {
  try {
    const expenses = await Expense.find({
      userId: req.user.id,
    });

    const insights = calculateInsights(expenses);

    res.json(insights);

  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};