import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CommentsList from '@/components/CommentsList';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: '/news' },
    { path: '/news/:page?', name: 'news', component: Home },
    { path: '/newest/:page?', name: 'newest', component: Home },
    { path: '/show/:page?', name: 'show', component: Home },
    { path: '/ask/:page?', name: 'ask', component: Home },
    { path: '/jobs/:page?', name: 'jobs', component: Home },
    { path: '/comments/:id', name: 'commentsList', component: CommentsList },
  ],
  linkActiveClass: 'header-link-active',
});
