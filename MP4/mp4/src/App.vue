<template>
  <div id="app" >
    <Menu />
    <BackgroundPic title="Pomagajmy.io"/>
    <router-view v-bind:session_data="data" class="body"/>
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
  data(){
    return {
      user_id: "",
      session_id: ""
    }
  },
  methods: {
    get_session(){
      this.user_id = this.get_cookie("user-id")
      this.session_id = this.get_cookie("session-id")
    },
    get_cookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
     }
   },
   mounted(){
     this.get_session();
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
