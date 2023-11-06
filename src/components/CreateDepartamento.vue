<template>
  <h1 class="mt-5">Crear departamento</h1>
  <h2 class="text-success">{{mensaje}}</h2>
  <form class="container w-50">
    <label class="form-label mt-3">Id Departamento: </label>
    <input type="text" class="form-control" v-model="departamento.idDepartamento" />
    <label class="form-label  mt-3">Nombre:</label>
    <input type="text" class="form-control" v-model="departamento.nombre"/>
    <label class="form-label  mt-3">Localidad:</label>
    <input type="text" class="form-control" v-model="departamento.localidad"/>
    <button class="btn btn-primary mt-3" v-on:submit.prevent="insertDepartamento()">Enviar</button>
  </form>
</template>

<script>
import ServiceDepartamentos from "./../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "CreateDepartamento",
  methods: {
    insertDepartamento() {
      service.insertDepartamento(this.departamento).then((result) => {
        console.log(result);
        this.mensaje = "insertado correctamente";
      });
    }
  },
  data() {
    return {
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: ""
      },
      mensaje: ""
    };
  }
};
</script>

<style></style>
