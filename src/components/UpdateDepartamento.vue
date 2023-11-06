<template>
  <h1>Actualizar departamento</h1>

  <router-link to="/">Volver</router-link>
  <form v-if="departamento" v-on:submit.prevent="updateDepartamento()" style="width:500px; margin:0 auto">
    <input type="hidden" class="form-control" v-model="departamento.idDepartamento"/>
    <label>Nombre</label>
    <input type="text" class="form-control" v-model="departamento.nombre"/>
    <label>Localidada</label>
    <input type="text" class="form-control" v-model="departamento.localidad"/>
    <button class="btn btn-success mt-3">Update</button>

  </form>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();

export default {
    name:"UpdateDepartamento",
    methods:{
        updateDepartamento(){
            service.updateDepartamento(this.departamento).then(result=>{
                console.log(result)
                this.$router.push("/");
            })
        }
    },
    data(){
        return{
            departamento:null,
            status:false
        }
    },
    mounted(){
        var id= this.$route.params.id;
        service.findDepartamento(id).then(result=>{
            this.departamento=result;
        })
    }
}
</script>

<style>

</style>