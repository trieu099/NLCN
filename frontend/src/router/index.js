import { createWebHistory, createRouter } from 'vue-router';
import Library from '@/views/Library.vue';
const routes = [


  {
    path: "/library",
    name: "library",
    component: Library,
  },
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import("@/views/Login.vue"),
  // },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/Register.vue"),
  },

  
  {
    path: "/books",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
  },
  {
    path: '/books/:bookCode',
    name: 'book.edit',
    component: () => import('@/views/BookEdit.vue'),
    props: (route) => ({ BookCode: route.params.bookCode })
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import("@/views/Customer.vue"),
  },

  {
    path: "/customeradd",
    name: "cus.add",
    component: () => import("@/views/CusAdd.vue"),
  },

  {
    path: '/customer/:listId',
    name: 'cus.edit',
    component: () => import('@/views/CusEdit.vue'),
    props: (route) => ({ ID: route.params.listId }),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/logout",
    name: 'logout',
    component: () => import("@/views/Logout.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
},

);
export default router;