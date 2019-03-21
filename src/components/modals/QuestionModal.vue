<template>
  <b-modal ref="modal" hide-footer title="Frage des Referenten">
    <div class="d-block text-center">
      <h3>Was ist die Antwort auf alles?</h3>
      <button @click="closeQuestionModal">12</button>
      <button @click="closeQuestionModal">22</button>
      <button @click="closeQuestionModal">32</button>
      <button @click="closeQuestionModal">42</button>
    </div>
  </b-modal>
</template>

<script>
    export default {
      name: 'QuestionModal',
      methods: {
        closeQuestionModal () {
          this.$refs.modal.hide()
        }
      }
    }
</script>

<style scoped>

</style>
