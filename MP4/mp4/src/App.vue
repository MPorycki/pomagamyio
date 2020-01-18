<template>
  <div id="app" >
    <Menu />
    <BackgroundPic title="Pomagajmy.io"/>
    <router-view v-bind:data="data" v-on:add-projekt="addProjekt" v-on:delete-projekt="deleteProjekt" v-on:edit-projekt="editProjekt" class="body"/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import BackgroundPic from './components/BackgroundPic.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
    BackgroundPic
  },
  methods: {
    addProjekt(newProjekt){
            this.data.projects = [...this.data.projects,newProjekt]
        },
    editProjekt(editedProjekt){
      var projekt;
      
      for (projekt of this.data.projects){
        if (projekt.id == editedProjekt.id){
          alert("edytujemy");
          projekt.title = editedProjekt.title
          projekt.description = editedProjekt.description
          projekt.people_req = editedProjekt.people_req
          projekt.city = editedProjekt.city
          projekt.zip_code = editedProjekt.zip_code
          projekt.street = editedProjekt.street
          projekt.building_no = editedProjekt.building_no
          projekt.flat_no = editedProjekt.flat_no
          projekt.exact_location = editedProjekt.exact_location
        }
      }
    },
    deleteProjekt(projekt_id){
      this.data.projects = this.data.projects.filter(projekt => projekt.id !== projekt_id);
    }
  },
  data() {
    return {
      data: {
        projects: [
            {
                    id: 1,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    logo: "../img/traj2.gif",
                    upvotes: 14,
                    downvotes: 2
                },
                {
                    id: 2,
                    title: "Ciekawa Inicjatywa 2",
                    description: "Lorem ipsum2",
                    logo: "~assets/img/traj2.gif",
                    upvotes: 143,
                    downvotes: 21
                },
                {
                    id: 3,
                    title: "Ciekawa Inicjatywa 3",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
                ,
                {
                    id: 4,
                    title: "Ciekawa Inicjatywa 4",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
                ,
                {
                    id: 5,
                    title: "Ciekawa Inicjatywa ",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
        ],
        users: [

        ],
        comments: [

        ]
      }
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0;
  margin:0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body{
  min-height: 60%;
  margin: 0;
  flex: 1 0 auto;
}

Footer {
  flex-shrink: 0;
}
</style>
