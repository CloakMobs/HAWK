import axios from 'axios';

const API_URL = 'http://localhost:5000/api/maltego';

const getEntities = async () => {
  try {
    const response = await axios.get(`${API_URL}/entities`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getLinks = async () => {
  try {
    const response = await axios.get(`${API_URL}/links`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getEntities,
  getLinks,
};