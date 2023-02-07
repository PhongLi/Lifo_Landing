import DefaultLayout from '~/Layout/DefaultLayout';
import { Contact, Faq, Home, Music, Pricing, Updates } from '~/Pages';

export const pubicRoutes = [
    {
        path: '/home',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/music',
        component: Music,
        layout: DefaultLayout,
    },
    {
        path: '/contact',
        component: Contact,
        layout: DefaultLayout,
    },
    {
        path: '/pricing',
        component: Pricing,
        layout: DefaultLayout,
    },
    {
        path: '/updates',
        component: Updates,
        layout: DefaultLayout,
    },
    {
        path: '/faq',
        component: Faq,
        layout: DefaultLayout,
    },
];
