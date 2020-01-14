<template>
  <div id="app">
    <Menu />
    <BackgroundPic title="Pomagajmy.io"/>
    <router-view class="body"/>
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
