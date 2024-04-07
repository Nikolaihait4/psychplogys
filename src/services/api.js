// services/api.js

import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://psychologys-5d5cd-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const fetchPsychologists = async () => {
  try {
    const response = await client.get('/psychologs.json');
    const psychologistsData = response.data;
    return psychologistsData; // Возвращаем данные
  } catch (error) {
    console.error('Error fetching psychologists:', error);
    throw error; // Бросаем ошибку, если произошла ошибка при запросе
  }
};
