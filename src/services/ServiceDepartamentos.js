import axios from "axios";
import Global from "./../Global";
export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise(function(resolve){
            var request="api/departamentos";
            var url = Global.urlApiDepartamentos+request;
            var departamentos=[];
            axios.get(url).then(response =>{
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }
    insertDepartamento(departamento){
        return new Promise(function(resolve){
            var request="api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            axios.post(url,departamento).then(response=>{
                resolve(response);
            })
        })
    }

}