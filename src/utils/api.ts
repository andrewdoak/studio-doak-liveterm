import axios from 'axios';
import config from '../../config.json';

// GitHub STARRED projects
export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/starred`,
  );
  return data;
};
// OG GitHub URL
// https://api.github.com/users/${config.social.github}/repos
// Read API docs
// Or test in POSTMAN
// for more options

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random?size=5');
  return {
    quote: `
QUOTE
------
“${data.content}”   
    — ${data.author}

TAGGED
------- 

#${data.tags}}

`,
  };
};

/* 
QUOTABLE GITHUB
https://github.com/lukePeavey/quotable

QUOTABLE SANDBOX
https://www.postman.com/quotable/workspace/quotable/request/2817454-e91e7177-64bc-4545-9f9a-f9a2191ed82e
*/
