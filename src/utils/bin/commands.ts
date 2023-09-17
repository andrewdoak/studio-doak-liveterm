// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome to doak.studio! Here are the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repo in a new tab...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi! I'm ${config.name}. 
Thanks for dropping in!
More about me...
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thanks for thinking of me!
i'm so grateful for your support:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `email me at: ${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return `opening my github...`;
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return `opening my linkedin. i'd love to ‘link up’. ;)`;
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `username: ${config.ps1_username}
status: welcome`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `whoa, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? oh you fancy, huh! why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=66OFYWBrg3o', '_blank'); // ...I'm sorry
//   return `Permission denied: little power === little responsibility. But remember: stay rare.`;
// };
// Opens to Nas: Rare
// Formerly opened to Rick Roll

// Banner
// Banner Creator: https://manytools.org/hacker-tools/ascii-banner/
export const banner = (args?: string[]): string => {
  return `
  ██████╗  ██████╗  █████╗ ██╗  ██╗             
  ██╔══██╗██╔═══██╗██╔══██╗██║ ██╔╝             
  ██║  ██║██║   ██║███████║█████╔╝              
  ██║  ██║██║   ██║██╔══██║██╔═██╗              
  ██████╔╝╚██████╔╝██║  ██║██║  ██╗    ██╗      
  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝      
                                                
  ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
  ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
  ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
  ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
  ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
  ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
                                                
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' for this site's repo.

Click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to visit LiveTerm's repo. 
Thanks, LiveTerm, for making this site possible! 
`;
};
