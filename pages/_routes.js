/** @typedef {{name: string, path: string, icon?: {initial: string, selected: string}}} Route*/
/** @typedef {Array<Route>} RouteList */

const icons = require('../assets/icons')

const routes = {
  /** @type {RouteList} */
  mainRoutes: [
    {
      name: "Home",
      path: "/",
      icon: icons.home,
    },
    {
      name: "New",
      path: "/new",
      icon: icons.search,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: icons.library,
    },
  ],
};

export default routes;
