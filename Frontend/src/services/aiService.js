import axiosInstance from '../utils/axiosInstance';

export const getAIInsights = async () => {
  const response = await axiosInstance.get('/api/ai');

  return response.data;
};