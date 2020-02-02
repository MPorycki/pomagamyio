<template>
    <div class="truebody">
                
                <table>
                        <colgroup>
                            <col span="1" style="width: 10%;">
                            <col span="1" style="width: 55%;">
                            <col span="1" style="width: 35%;">
                        </colgroup>
                        <tr style="background-color: lightslategray" >
                            <td>Miejsce</td>
                            <td>Uzytkownik</td>
                            <td>Liczba głosów</td>
                        </tr>
                        <tr v-bind:key="project.id" v-for="project in this.projects">
                            <td>{{project.position}}</td>
                            <td>{{project.name}}</td>
                            <td>{{project.upvotes}}</td>
                        </tr>
                </table>
        
            
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
        iterator: 0,
        projects: {}
        }
    },
   methods: {
   },
   mounted(){
           axios.get("http://127.0.0.1:5000/ranking").then(response =>
               this.projects = response.data["projects"])
       }
}
</script>

<style scoped>
.truebody {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.truebody table {
    width: 25%;
    text-align: center;
}
</style>