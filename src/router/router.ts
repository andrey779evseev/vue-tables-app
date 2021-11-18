//#region import
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LoginPage from '@/views/pages/login/login.vue'
import ErrorPageComponent from '@views/pages/error404/error404.vue'
import ReferenceShopBooks from '@views/pages/reference-shop-books/reference-shop-books.vue'
import EmployeesWithModal from '@views/pages/employees/employees-with-modal.vue'
import Points from '@views/pages/points/points.vue'
import {
  DEFAULT,
  EDITOR_CREATE_EMPLOYEE,
  EMPLOYEES_WITH_MODAL,
  EMPLOYEES_WITHOUT_MODAL,
  LOGIN,
  POINTS,
  REFERENCE_SHOP_BOOKS,
  SERVICE_CARDS
} from './routerNames'
import EmployeesWithoutModal from '@views/pages/employees/employees-without-modal.vue'
import EditOrCreateEmployee from '@views/pages/employees/edit-or-create-employee.vue'
import ServiceCards from '@views/pages/service-cards/service-cards.vue'
//#region Admin
const Layout = () => import('@/views/layouts/layout.vue')

const routes: Array<RouteRecordRaw> = [
  {
    name: LOGIN,
    path: '/login',
    component: LoginPage,
    meta: {
      title: 'Авторизация',
      allowAnonymous: true,
      middleware: [
      ]
    }
  },
  {
    name: DEFAULT,
    path: '/',
    redirect: 'login'
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '',
      middleware: [
      ]
    },
    children: [
      {
        path: 'employees-with-modal',
        name: EMPLOYEES_WITH_MODAL,
        component: EmployeesWithModal,
        meta: {title: 'Сотрудники c модыльным окном'}
      },
      {
        name: REFERENCE_SHOP_BOOKS,
        path: 'reference-shop-books',
        component: ReferenceShopBooks,
        meta: {title: 'Справочник магазинов'}
      },
      {
        name: POINTS,
        path: 'points',
        component: Points,
        meta: {title: 'Точки'}
      },
      {
        path: 'employees-without-modal',
        name: EMPLOYEES_WITHOUT_MODAL,
        component: EmployeesWithoutModal,
        meta: {title: 'Сотрудники без модального окна'}
      },
      {
        path: 'edit-or-create-employee',
        name: EDITOR_CREATE_EMPLOYEE,
        component: EditOrCreateEmployee,
      },
      {
        path: 'service-cards',
        name: SERVICE_CARDS,
        component: ServiceCards,
      }
    ],
  },


  {path: '/:pathMatch(.*)*', component: ErrorPageComponent},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
