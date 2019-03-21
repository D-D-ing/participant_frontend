<template>
  <div>
    <h1>Willkommen zum Livefeedback!</h1>

    Bitte den Code der Veranstaltung eingeben:

      <b-form-input v-model="eventID" type="text" placeholder="Enter your EventID" />
      <b-button type="submit" variant="primary" @click="handleClick">Submit</b-button>

  </div>
</template>

<script>
    export default {
      name: 'Welcome',
      data () {
        return {
          eventID: ''
        }
      },
      methods: {
        handleClick () {
          console.log(this.eventID)
          this.$router.push('/event/' + this.eventID + '/0')
        }
      }
    }
</script>

<style scoped>

</style>
