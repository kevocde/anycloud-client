<template>
  <div class="horizontalMenucontainer" id="app">
    <div id="global-loader">
      <img src="../public/valex-theme/html/assets/img/loader.svg" class="loader-img" alt="Loader">
    </div>
    <div class="page">
      <main-header />
      <main-menu />
      <div class="main-content horizontal-content">
        <div class="container">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <router-view/>
        </div>
      </div>
      <main-footer/>
    </div>
    <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
  </div>
</template>
<script>
import MainFooter from './components/MainFooter.vue'
import MainHeader from './components/MainHeader.vue'
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'app',
  components: {MainFooter, MainHeader, MainMenu}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
