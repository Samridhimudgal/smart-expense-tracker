const SavingsGoal = ({ saved, target }) => {
  const progress = ((saved / target) * 100).toFixed(0);

  return (
    <div className='bg-white p-5 rounded-2xl shadow'>
      <h2 className='text-xl font-semibold'>
        Savings Goal
      </h2>

      <div className='mt-4'>
        <div className='w-full bg-gray-200 h-3 rounded-full'>
          <div
            className='bg-green-500 h-3 rounded-full'
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className='mt-3'>
          ₹{saved} / ₹{target}
        </p>
      </div>
    </div>
  );
};
