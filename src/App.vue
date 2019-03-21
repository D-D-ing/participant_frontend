<template>
  <div id="app">
    <Navigation></Navigation>
    <main>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Event from './components/Event'
  import Navigation from './components/Navigation'

  export default {
    name: 'app',
    components: {
      Event,
      Navigation
    }
  }
</script>

<style type="text/scss" src="./assets/style/app.scss"></style>

