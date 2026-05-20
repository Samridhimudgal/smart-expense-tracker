const PredictionCard = ({ predicted }) => {
  return (
    <div className='bg-white p-5 rounded-2xl shadow'>
      <h2 className='text-xl font-semibold'>
        Expense Prediction
      </h2>

      <p className='mt-3 text-lg'>
        Predicted Next Month Expense:
      </p>

      <h3 className='text-3xl font-bold mt-2'>
        ₹{predicted}
      </h3>
    </div>
  );
};

export default PredictionCard;