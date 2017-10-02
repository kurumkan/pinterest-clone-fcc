import Main from 'components/Main';
import ImageGridPage from 'components/ImageGridPage/index';
import ProfilePage from 'components/ProfilePage/index';
import NotFoundPage from 'components/NotFoundPage/index';

const createRoutes = (store) => {
  const routes = [
    {
      path: '/',
      component: Main,
      indexRoute: {
        onEnter: (nextState, replace) => replace({
          pathname: 'pins'
        })
      },
      childRoutes: [
        {
          path: 'pins',
          component: ImageGridPage
        },
        {
          path: 'profile',
          component: ProfilePage
        },
        {
          path: '*',
          component: NotFoundPage
        }
      ]
    }
  ];

  return routes;
};

export default createRoutes;