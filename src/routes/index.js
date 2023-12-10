import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Home';
import Profile from '~/pages/Home';
import Upload from '~/pages/Home';
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
