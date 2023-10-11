import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
                                       
                                       
               
         #                                 
         %@%       
         %@@@   __|/_
          %@%_ |▓▓▓▓▓|                         
            /▓▓▓▓▓▓▓▓▓▓▓▓|             
          /▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|         
        /▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|       
      /▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|      
    ▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        
    ▓  + D O A K . S T U D I O + ▓    
    ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓     
       |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓/       
         |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓/        
           |▓▓▓▓▓▓▓▓▓▓▓▓▓▓/           
                |▓▓▓▓/
                
                
‘sumfetch’

 ABOUT
------------------------------
 $ ~${config.name} (that's me)
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
爵 <u><a href="${config.gui_url}" target="_blank">${config.gui_name} (gui)</a></u>

 CONTACT 
------------------------------
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>

 FEATURED WORK
------------------------------
 <u><a href="${config.projects.project1_github}" target="_blank">${config.projects.project1_name}</a></u>
 <u><a href="${config.projects.project2_github}" target="_blank">${config.projects.project2_name}</a></u>
 <u><a href="${config.projects.project3_github}" target="_blank">${config.projects.project3_name}</a></u>

`;
};

export default sumfetch;
/* 

// REMOVED FROM "SUPPORT"
 <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>
 <u><a href="${config.donate_urls.cashapp}" target="_blank">${config.donate_urls.cashapp}</a></u>

// REMOVED FROM RETURN
if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else { MY sumfetch HERE}
*/
