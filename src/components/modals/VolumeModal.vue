<template>
  <b-modal hide-footer title="Wie heißt die Mutter von Niki Lauda..." ref="modal">
    <div class="d-block text-center">
      <h3>Mama Lauda!</h3>
      <p>
        Eine Anfrage an den Referenten zum Lauter-Sprechen ist abgeschickt worden.
      </p>
    </div>
  </b-modal>
</template>

<script>
    export default {
      name: 'VolumeModal',
      created () {
        console.log('Something has happened.')
      },
      methods: {
        close () {
          this.$emit('close')
        }
      }
    }
</script>

<style scoped>

</style>
