import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full';
import Full2 from '@/containers/Full2';

import Buttons from '@/views/components/Buttons';

// Views - Pages
import Page404 from '@/views/errorPages/Page404';
import Page500 from '@/views/errorPages/Page500';

/* login */
const Login = _import('login/index');

Vue.use(Router);

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  {
    path: '/pages',
    redirect: '/pages/p404',
    name: 'Pages',
    component: {
      render(c) {
        return c('router-view');
      },
      // Full,
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: _import('errorPages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: _import('errorPages/Page404'),
      },
    ],
  },
];

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
  {
    path: '/',
    redirect: '/info',
    name: '首页',
    component: Full,
    hidden: false,
    children: [
      {
        path: '/info',
        name: '介绍',
        icon: 'thumbsup',
        component: _import('Introduction'),
      },
      {
        path: '/system',
        name: '系统功能',
        icon: 'thumbsup',
        meta: { role: ['admin'] },
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [
          {
            path: 'set',
            name: '系统设置',
            icon: 'thumbsup',
            component: _import('system/set'),
          },
          {
            path: 'navigation',
            name: '导航管理',
            icon: 'thumbsup',
            component: _import('system/navigation'),
          },
          {
            path: 'config',
            name: '配置管理',
            icon: '',
            component: _import('system/config'),
          },
          {
            path: 'upload',
            name: '上传管理',
            icon: 'thumbsup',
            component: _import('system/upload'),
          },
        ],
      },
      {
        path: '/authority',
        name: '权限管理',
        redirect: '/authority/member',
        icon: 'bookmark',
        meta: { role: ['admin','groupLeader'] },
        component: {
          render(c) {
            return c('router-view');
          },
        },
        children: [
          {
            path: 'member',
            name: '用户',
            icon: 'social-youtube',
            component: _import('authority/member'),
            meta: { role: ['admin','groupLeader'] },
            // hidden: false,
          },
          {
            path: 'groupleader',
            name: '管理员',
            icon: 'wand',
            meta: { role: ['admin'] },
            component: _import('authority/groupleader'),
          },
          {
            path: 'usergroup',
            name: '用户组',
            icon: 'alert',
            meta: { role: ['admin'] },
            component: _import('authority/usergroup'),
          },
        ],
      },
      {
        path: '/deal',
        name: '交易管理',
        icon: 'speedometer',
        component:{
          render(c){
            return c('router-view')
          }
        },
        redirect: '/deal/order',
        children: [
          {
            path: 'order',
            name: '订单管理',
            icon: 'social-youtube',
            component: _import('deal/order'),
            hidden: false,
          },
          {
            path: 'payApi',
            name: '支付接口',
            icon: 'wand',
            component: _import('deal/payApi'),
          },
          {
            path: 'onlineBankingAccount',
            name: '网银账号',
            icon: 'alert',
            component: _import('deal/onlineBankingAccount'),
          },
          {
            path: '5of1',
            name: '五码合一',
            icon: 'alert',
            component: _import('deal/5of1'),
          },
          {
            path: 'order5of1',
            name: '定单管理-五码',
            icon: 'alert',
            component: _import('deal/order5of1'),
          },
        ],
      },
      {
        path: '/generalize',
        name: '推广订单',
        icon: 'speedometer',
        component: {
          render(c) {
            return c('router-view');
          },
        },
        redirect: '/generalize/order',
        children: [
          {
            path: 'order',
            name: '定单管理',
            icon: 'social-youtube',
            component: _import('generalize/order'),
            hidden: false,
          },
        ],
      },
    ],
  },
  { path: '*', redirect: '/pages/404', hidden: true },
];
