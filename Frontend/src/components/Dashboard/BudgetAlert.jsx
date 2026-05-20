const BudgetAlert = ({ totalExpense, limit }) => {
  return (
    <>
      {totalExpense > limit && (
        <div className='bg-red-100 text-red-600 p-3 rounded-xl'>
          Warning: Budget Limit Exceeded
        </div>
      )}
    </>
  );
};

export default BudgetAlert;