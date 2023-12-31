import { createRouter, createWebHistory } from "vue-router";
import  DepartamentosComponent from './components/DepartamentosComponent.vue';
import CreateDepartamento from './components/CreateDepartamento.vue';
import DetallesDepartamento from './components/DetallesDepartamento.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';
const myRoutes =[
    {
        path:"/",component:DepartamentosComponent
    },
    {
        path:"/create",component:CreateDepartamento
    },
    {
        path:"/details/:id/:nombre/:localidad",component:DetallesDepartamento
    },
    {
        path:"/update/:id",component:UpdateDepartamento
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:myRoutes
})

export default router;