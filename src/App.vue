<template>
  <div class="horizontalMenucontainer" id="app">
    <div id="global-loader">
			<img src="../public/valex-theme/html/assets/img/loader.svg" class="loader-img" alt="Loader">
		</div>
    <div class="page">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
      <footer-component></footer-component>
    </div>
    <a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>
  </div>
</template>
<script>
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {FooterComponent}
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
