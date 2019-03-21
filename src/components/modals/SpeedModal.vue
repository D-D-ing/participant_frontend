<template>
  <b-modal hide-footer title="Du kommst nicht mehr mit..." ref="modal">
    <div class="d-block text-center">
      <h3>Dir geht es also so:</h3>
      <div>
        <b-img src="http://www.lowbird.com/data/images/2010/01/2009-12-28-1261411567779-1.gif"></b-img>
      </div>
      Eine Anfrage an den Referenten zum Langsamer-Sprechen ist abgeschickt worden.
    </div>
  </b-modal>
</template>

<script>
  export default {
    name: 'SpeedModal',
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
