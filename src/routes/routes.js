import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Home';
import Profile from '~/pages/Home';
import Upload from '~/pages/Home';
import Live from '~/pages/Live';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
