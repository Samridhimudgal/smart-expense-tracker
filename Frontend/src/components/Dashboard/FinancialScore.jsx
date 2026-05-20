const FinancialScore = ({ score }) => {
  return (
    <div className='bg-white p-5 rounded-2xl shadow'>
      <h2 className='text-xl font-semibold'>
        Financial Score
      </h2>

      <div className='text-4xl font-bold mt-4'>
        {score}/100
      </div>
    </div>
  );
};

export default FinancialScore;