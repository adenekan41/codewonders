import ReactGA from 'react-ga';

export const initGA = () => {
  console.log(
    `%c
    CONTACT ME
   ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     || 
                
  Hey There i'm glad you liked the site and what to see whats going on, sure check the repo at https://github.com/adenekan41/codewonders 
  
  And dont forget to shoot me an email at hellocodewonders@gmail.com if you need me to come do awesome work at your company`,
    'font-family:inherit'
  );
  ReactGA.initialize('UA-128989337-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
