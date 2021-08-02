import Homepage from '../views/pages/homepage';
import Favorite from '../views/pages/favoritepage';
import Detail from '../views/pages/detailpage';

const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/favorite': Favorite,
  '/restaurant/:id': Detail,
};

export default routes;
