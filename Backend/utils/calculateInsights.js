const calculateInsights = expenses => {
  const total = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  let foodExpense = 0;

  expenses.forEach(item => {
    if (item.category === 'Food') {
      foodExpense += item.amount;
    }
  });

  const percentage = ((foodExpense / total) * 100).toFixed(0);

  return [
    `You spent ${percentage}% on food this month`,
    'Try reducing unnecessary expenses',
  ];
};

export default calculateInsights;