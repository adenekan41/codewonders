import { createContext } from 'react';
import ARTICLE_DATA from '../AppData/articles';
import LENS_DATA from '../AppData/lens';
import PROJECTS_DATA from '../AppData/projects';

type AppContextType = {
  show?: boolean;
  theme?: boolean;
  loadTheme?: () => void;
  closeShow?: () => void;
  toggleShow?: () => void;
  toggleTheme?: () => void;
}
const AppContext = createContext<AppContextType>({});
export const ArticleContext = createContext(ARTICLE_DATA);
export const LensContext = createContext(LENS_DATA);
export const ProjectsContext = createContext(PROJECTS_DATA);

export default AppContext;
