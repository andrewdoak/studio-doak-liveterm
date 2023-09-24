// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 4 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ' + ' ';
    }
  }
  return `
WELCOME
--------
to ${config.liveterm_url}:$ ~ hello

QUICKSTART
-----------
type 'about' for a quick hello.
type 'sumfetch' for a summary.
type 'gui' to redirect. 
=======================
====> ${config.gui_name} <====
=======================

COMMANDS
---------
${c}\n
[tab]: trigger completion.
[ctrl+l] / clear: clear terminal.

`;
};

// Repo
export const repo = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${config.repo}`, `_blank`);
  }, 1750);
  return `repository '${config.liveterm_url}' loading...`;
};

// AboutMe
export const about = async (args: string[]): Promise<string> => {
  return `
HELLO!
-------
i'm ${config.name}. 
thanks for stopping by!

GET TO KNOW ME
---------------
'sumfetch' - for a summary.
'bio' - for more about me.
'resume' - for my latest resume.
`;
};

// gui (static site)
export const gui = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${config.gui_url}`, `_blank`);
  }, 1300);
  return `gui loading...`;
};

// Resume
export const resume = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${config.resume_url}`, `_blank`);
  }, 1300);
  return 'resume loading...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `...i'm so grateful for your support!

DONATE @
---------
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.cashapp}" target="_blank">cashapp</a></u>

`;
};

// Email
export const email = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`mailto:${config.email}`, `_blank`);
  }, 2250);
  return `you can reach me at: ${config.email}... 
email loading...`;
};

// GitHub
export const github = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`https://github.com/${config.social.github}/`, `_blank`);
  }, 2250);
  return `let's build something great together!
github.com/${config.social.github} loading...`;
};

// LinkedIn
export const linkedin = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(
      `https://www.linkedin.com/in/${config.social.linkedin}/`,
      `_blank`,
    );
  }, 2250);
  return `linkedin loading...
i'd love to ‘link up’! ;)`;
};

// Google Search
export const google = async (args: string[]): Promise<string> => {
  const google = args.join('+');
  if (!google) {
    return `usage: google [your search]  
example: ‘google haikus on food’
result of use: opens google [your search] in a new tab`;
  }
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `searching google for ‘${args.join(' ')}’...`;
};
/* 
// OG Google Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `searching google for ${args.join(' ')}...`;
};

*/

// DuckDuckGo Search
export const duckduckgo = async (args: string[]): Promise<string> => {
  const duckduckgo = args.join('+');
  if (!duckduckgo) {
    return `usage: duckduckgo [your search]  
example: ‘duckduckgo why use duckduckgo’
result of use: opens duckduckgo [your search] in a new tab`;
  }
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `searching duckduckgo for ‘${args.join(' ')}’...`;
};
/* 
// OG DuckDuckGo Search
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `searching duckduckgo for ${args.join(' ')}...`;
}; 
*/

// Bing Search
export const bing = async (args: string[]): Promise<string> => {
  const bing = args.join('+');
  if (!bing) {
    return `usage: bing [your search]  
example: ‘bing why use bing’
result of use: opens bing [your search] in a new tab`;
  }
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `searching bing for “${args.join(' ')}”...`;
};
/* 
// OG Bing Search
export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
}; 
*/

// Reddit Search
export const reddit = async (args: string[]): Promise<string> => {
  const reddit = args.join('+');
  if (!reddit) {
    return `usage: reddit [your search]  
example: ‘reddit lifeprotips’
result of use: opens reddit [your search] in a new tab`;
  }
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `searching reddit for ‘${args.join(' ')}’...`;
};
/* 
// OG Reddit Search
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `searching reddit for ${args.join(' ')}...`;
}; 
*/

// Echo command
export const echo = async (args: string[]): Promise<string> => {
  const echo = args.join('+');
  if (!echo) {
    return `usage: echo [your important words]. 
example: echo [a zen koan] what is your original face before you were born?`;
  }
  return args.join(' ');
};
/* 
OG Echo
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};
*/

// whoami command
export const whoami = async (args: string[]): Promise<string> => {
  return `username: ${config.ps1_username}
status: welcome`;
};

// ls command
export const ls = async (args: string[]): Promise<string> => {
  return `there are neither files
nor directories in here
did you try cd? 

¯|_(ツ)_|¯
— a haiku, by the-terminal
`;
};

// cd command
export const cd = async (args: string[]): Promise<string> => {
  return `sorry! 
i can't afford more directories.
if you'd like to help with that...

...$

type 'donate'`;
};

// date command
export const date = async (args: string[]): Promise<string> => {
  return `date.time_now: ${new Date().toLocaleString()}`;
};

// vi command
// export const vi = async (args: string[]): Promise<string> => {
//   return `whoa, you still use 'vi'? just try 'vim'.`;
// };

// vim command
// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// nvim command
// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? oh you fancy, huh! why not 'emacs'?`;
// };

// emacs command
// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// sudo command
export const sudo = async (args?: string[]): Promise<string> => {
  // window.open(
  //   '',
  //   '_blank',
  // );
  setTimeout(function () {
    window.open(
      `https://youtu.be/otCpCn0l4Wo?si=6BaITde4Y3RSzIQX&t=14/`,
      `_blank`,
    );
  }, 1250);
  return `permission denied...you can't touch this!`;
};
// Opens to MC Hammer: Can't Touch This
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

<u><a class="text-light-blue dark:text-dark-blue underline" href=${config.gui_url} target="_blank">${config.gui_name}.gui</a></u>
                                              


QUICKSTART
-----------
type 'help' to see a list of commands.
type 'sumfetch' for a summary.
type 'about' for an introduction.
'bio' - for more about me.

type 'gui' for an alternative version.
type 'repo' for this site's repo.


CREDITS
--------
doak.studio stands on 
the shoulders of <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo_liveterm}" target="_blank">liveterm</a></u>.

thank you, liveterm!

`;
};
