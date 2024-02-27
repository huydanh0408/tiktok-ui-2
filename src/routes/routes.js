import CreatorCenter from '~/components/layouts/CreatorCenter';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes // not login

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/friends', component: Friends },
    { path: '/explore', component: Explore },
    { path: '/live', component: Live },
    { path: '/profile', component: Profile },
    { path: '/creator-center/upload', component: Upload, layout: CreatorCenter },
    { path: '/search', component: Search, layout: null },
];

// Private routes // logged in
const privateRoutes = [];

export { publicRoutes, privateRoutes };
