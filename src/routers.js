/**
 * Created by neho on 2016/12/27.
 */
export const routes = [{
  name: 'layout',
  path: '/',
  component: (resolve)=> {
    require(['./components/layout.vue'], resolve)
  },
  //二级路由
  children:[{
    name: 'home',
    path: '/home',
    component: (resolve)=> {
      require(['./components/home.vue'], resolve)
    }
  },{
    name: 'contact',
    path: '/contact',
    component: (resolve)=> {
      require(['./components/contact.vue'], resolve)
    }
  },{
    name: 'chat',
    path: '/chat',
    component: (resolve)=> {
      require(['./components/chat.vue'], resolve)
    }
  },{
    name: 'me',
    path: '/me',
    component: (resolve)=> {
      require(['./components/me.vue'], resolve)
    }
  }]
}
//一级路由
]
