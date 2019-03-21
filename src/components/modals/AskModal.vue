<template>
  <b-modal ref="modal" hide-footer title="Ask a something:">
    <div class="d-block text-center">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-button type="submit" variant="warning" @click="close">Submit</b-button>
    </div>
  </b-modal>
</template>

<script>
    export default {
      name: 'AskModal',
      data () {
        return {
          text: ''
        }
      },
      methods: {
        close () {
          this.$refs.modal.hide()
        }
      }
    }
</script>

<style scoped>

</style>
