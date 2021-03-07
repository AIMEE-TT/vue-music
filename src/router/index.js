import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Right from '../views/Right/Right.vue'
import myseilffm from '../components/myseilffm/myseilffm.vue'
import livestreaming from '../components/livestreaming/livestreaming.vue'
import musicvideo from '../components/musicvideo/musicvideo.vue'
import friends from '../components/friends/friends.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', 
      name: 'home',
      component: Home ,
      children: [
        { path: '/right', redirect: '/rightstyle'},
        { path: '/songs:id',
          component: () => import('../components/songlist/SongList.vue')
        },
        { path: '/right',
          component: Right ,
          children: [
            { path: '/rightstyle',
              component: () => import('../views/Right/menu/RightStyle.vue'),
            },
            { path: '/rightsongs',
              component: () => import('../views/Right/menu/RightSongs.vue')
            },
            { path: '/rightanchor',
              component: () => import('../views/Right/menu/RightAnchor.vue')
            },
            { path: '/rightlist',
              component: () => import('../views/Right/menu/RightList.vue')
            },
            { path: '/rightsinger',
              component: () => import('../views/Right/menu/RightSinger.vue')
            },
            { path: '/rightnewsing',
              component: () => import('../views/Right/menu/RightNewsing.vue')
            },
          ]
        },
        { path: '/myseilffm',component: myseilffm },
        { path: '/livestreaming',component: livestreaming },
        { path: '/musicvideo', component: musicvideo },
        { path: '/friends',component: friends }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register},
    { path: '/singel',
      component: () => import('../components/singel/Singel.vue')
    }
  ]
})
