import axios from 'axios';

const API_URL = 'http://localhost:5000/api/filings';

const getAllFilings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getFilingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createFiling = async (filingData) => {
  try {
    const response = await axios.post(API_URL, filingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateFiling = async (id, filingData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, filingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteFiling = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllFilings,
  getFilingById,
  createFiling,
  updateFiling,
  deleteFiling,
};