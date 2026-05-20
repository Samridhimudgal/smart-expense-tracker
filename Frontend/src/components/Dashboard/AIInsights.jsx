import React from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';

const AIInsights = ({ insights = [
    <AIInsights
  insights={[
    "Your food expenses increased this month.",
    "You saved more than last month.",
    "Shopping category has the highest spending.",
    "Try reducing weekend expenses."
  ]}
/>
] }) => {
  return (
    <div className='bg-white p-5 rounded-2xl shadow-md border border-gray-100'>
      
      <div className='flex items-center gap-2 mb-5'>
        <HiOutlineSparkles className='text-2xl text-purple-600' />
        
        <h2 className='text-xl font-bold text-gray-800'>
          AI Insights
        </h2>
      </div>

      <div className='space-y-4'>

        {insights?.length > 0 ? (
          insights.map((item, index) => (
            <div
              key={index}
              className='bg-gradient-to-r from-purple-50 to-indigo-50 
              border border-purple-100 p-4 rounded-xl 
              text-gray-700 leading-6'
            >
              {item}
            </div>
          ))
        ) : (
          <div className='text-center py-8 text-gray-500'>
            No AI insights available
          </div>
        )}

      </div>
    </div>
  );
};

export default AIInsights;