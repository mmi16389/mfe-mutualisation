<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home : {{ version }}</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';  

	// Env var
	declare const VERSION_APP: string;

	/** App is the main component */
	@Component 
	export default class App extends Vue {
		get version(): string {
			return VERSION_APP;
		}
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
