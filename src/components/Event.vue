<template>
  <div class="event">
    <h1>{{ conferenceTitle }}</h1>
    <slides ref="slideShow"></slides>
  </div>
</template>

<script>
  import Slides from './Slides'

  export default {
    name: 'event',
    components: {
      Slides
    },
    data () {
      return {
        conferenceTitle: this.$route.params.eventName
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-position: inside;
  }
  a {
    color: #42b983;
  }
</style>
