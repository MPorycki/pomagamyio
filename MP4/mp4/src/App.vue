<template>
  <div id="app" >
    <Menu />
    <BackgroundPic title="Pomagajmy.io"/>
    <router-view v-bind:data="data" 
    v-on:add-projekt="addProjekt" 
    v-on:delete-projekt="deleteProjekt" 
    v-on:edit-projekt="editProjekt" 
    v-on:add-komentarz="addKomentarz" 
    v-on:edit-komentarz="editKomentarz" 
    v-on:delete-komentarz="deleteKomentarz"
    v-on:upvote-projekt="upvoteProjekt"
    v-on:downvote-projekt="downvoteProjekt"
    v-on:upvote-komentarz="upvoteKomentarz"
    v-on:downvote-komentarz="downvoteKomentarz"
     class="body"/>
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
          projekt.title = editedProjekt.title
          projekt.Description = editedProjekt.Description
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
    },
    addKomentarz(newKomentarz){
          this.data.comments = [...this.data.comments,newKomentarz]
    },
    editKomentarz(editedKomentarz){
      var komentarz;
        for (komentarz of this.data.comments){
        if (komentarz.id == editedKomentarz.id){
          komentarz.text = editedKomentarz.text;
          komentarz.created_at = editedKomentarz.created_at;
      }
      }
    },
    deleteKomentarz(komentarz_id){
      this.data.comments = this.data.comments.filter(komentarz => komentarz.id !== komentarz_id);
    },
    upvoteProjekt(projekt_id){
      if(!this.alreadyVoted(1, projekt_id, "projekt")){
        this.data.projects.filter(projekt => projekt.id == projekt_id)[0].upvotes += 1;
        var newVote = {userId: 1, projektId: projekt_id}
        this.data.project_votes = [...this.data.project_votes, newVote]
      } else {
        alert("Oddales juz glos na ten projekt");
      }
    },
    downvoteProjekt(projekt_id){
      if(!this.alreadyVoted(1, projekt_id, "projekt")){
        this.data.projects.filter(projekt => projekt.id == projekt_id)[0].downvotes += 1;
        var newVote = {userId: 1, projektId: projekt_id}
        this.data.project_votes = [...this.data.project_votes, newVote]
      } else {
        alert("Oddales juz glos na ten projekt");
      }
    },
    upvoteKomentarz(komentarz_id){
      if(!this.alreadyVoted(1, komentarz_id, "komentarz")){
        this.data.comments.filter(Komentarz => Komentarz.id == komentarz_id)[0].upvotes += 1;
        var newVote = {userId: 1, komentarzId: komentarz_id}
        this.data.komentarz_votes = [...this.data.komentarz_votes, newVote]
      } else {
        alert("Oddales juz glos na ten komentarz");
      }
    },
    downvoteKomentarz(komentarz_id){
      if(!this.alreadyVoted(1, komentarz_id, "komentarz")){
        this.data.comments.filter(Komentarz => Komentarz.id == komentarz_id)[0].downvotes += 1;
        var newVote = {userId: 1, komentarzId: komentarz_id}
        this.data.komentarz_votes = [...this.data.komentarz_votes, newVote]
      } else {
        alert("Oddales juz glos na ten komentarz");
      }
    },
    alreadyVoted(userId, objectId, type){
      if (type == "projekt"){
        var projekt;
        for (projekt of this.data.project_votes){
          if (projekt.userId == userId && projekt.projektId == objectId){
            return true;
          }
        }
      } else {
        var komentarz;
        for (komentarz of this.data.komentarz_votes){
          if (komentarz.userId == userId && komentarz.komentarzId == objectId){
            return true;
          }
      }
    }
    return false;
  }
  },
  data() {
    return {
      data: {
        users: [

        ],
        comments: [
                {
                    id: 1,
                    created_at: "17.10.2019 15:00",
                    text: "ABC TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 1,
                    projectId: 1   
                },
                {
                    id: 2,
                    created_at: "17.10.2019 15:02",
                    text: "ABC2 TEST2",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 2,
                    projectId: 1   
                },
                {
                    id: 3,
                    created_at: "17.10.2019 15:05",
                    text: "ABC3 TEST3",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 3,
                    projectId: 1   
                }
        ],
        project_votes: [

        ],
        komentarz_votes: [

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
