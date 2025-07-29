import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

const headers = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`, {
      headers,
    });
    return response.data;
  } catch {
    throw new Error('User not found');
  }
};
