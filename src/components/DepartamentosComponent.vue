<template>
  <h1>Crud Departamentos</h1>
  <img src="./../assets/images/loading.jpg" v-if="status == false"/>
  <table v-else class="table table-bordered">
    <thead>
        <tr>
            <th>Id departamento</th>
            <th>Nombre</th>
            <th>Localidad</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="dept in departamentos" :key="dept">
            <td>{{dept.idDepartamento}}</td>
            <td>{{dept.nombre}}</td>
            <td>{{dept.localidad}}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
 name: "DepartamentosComponent",
 mounted(){
    service.getDepartamentos().then(result=>{
        this.departamentos=result;
        this.status=true
    })
 },
 data(){
    return{
        departamentos:[],
        status:false
    }
 }
}
</script>

<style>
img{
    width: 200px;
    height: 200px;
}
</style>