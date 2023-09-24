// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

// GitHub Projects (all)
// name: ${repo.name}
export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `summary: ${repo.description}
repo: <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.full_name}</a>
web: ${repo.homepage}
tags: # ${repo.topics}\n 
`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const bio = async (args: string[]): Promise<string> => {
  const bio = await getReadme();
  return `opening github readme...\n
${bio}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return `usage: weather [city]. 
example: weather chicago`;
  }
  const weather = await getWeather(city);
  return weather;
};
