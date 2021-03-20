<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/auth">Auth</router-link>
      <router-link to="/test">Test</router-link>
    </div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        const layoutName = this.$route.meta.layout || 'DefaultLayout';
        return () => import(`@/layouts/${layoutName}.vue`)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;

    width: 100%;
    height: 100vh;
  }

  body {
    font-size: 35px;
    background-color: #000000;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nav {
    padding: 30px;

    a {
      margin-right: 25px;
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #E5E5E5;
      }
    }
  }
</style>
