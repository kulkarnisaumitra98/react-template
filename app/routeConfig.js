import NotFound from '@containers/NotFoundPage/Loadable';
import HomeContainer from '@containers/HomeContainer/Loadable';
import ArtistContainer from '@containers/ArtistContainer/Loadable';
import routeConstants from '@utils/routeConstants';
export const routeConfig = {
  repos: {
    component: HomeContainer,
    ...routeConstants.repos
  },
  artists: {
    component: ArtistContainer,
    ...routeConstants.artists
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};
