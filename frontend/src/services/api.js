const API_URL = 'http://localhost:5001/api/pictures';

export const fetchPictures = async (searchTerm = '') => {
  try {
    const url = searchTerm ? `${API_URL}?search=${searchTerm}` : API_URL;
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch pictures');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching pictures:', error);
    throw error;
  }
};

export const fetchPictureById = async (id) => {
  try {
    const url = `http://localhost:5001/api/pictures/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch picture details');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching picture details:', error);
    throw error;
  }
};
