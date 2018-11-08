
const Home = () => import(/* webpackChunkName: "dashboard" */ '@/views/Home.vue');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');
const Site = () => import(/* webpackChunkName: "site" */ '@/views/Site.vue');
const Page = () => import(/* webpackChunkName: "page" */ '@/views/Page.vue');
const PageNotFound = () => import(/* webpackChunkName: "error-404" */ '@/views/PageNotFound');

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/site',
        name: 'site',
        component: Site,
    },
    {
        path: '/page',
        name: 'page',
        component: Page,
    },
    {
        path: '/*',
        name: 'error-404',
        component: PageNotFound,
    },
];
