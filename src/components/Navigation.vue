<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">D.D.Ing Live Feedback</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mr-auto" v-if="$route.name === 'Event'">
        <b-nav-item-dropdown text="Dev" right>
          <b-dropdown-item @click="openQuestionModal">Question</b-dropdown-item>
          <b-dropdown-item @click="nextSlide">Next</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="$route.name === 'Event'">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Ask a something..." v-model="searchtext"/>
            <b-button size="sm"
                      class="my-2 my-sm-0"
                      type="submit"
                      @click="search">Question</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Interact" right v-if="$route.name === 'Event'">
            <b-dropdown-item @click="openVolumeModal">Volume</b-dropdown-item>
            <b-dropdown-item @click="openAskModal">Question</b-dropdown-item>
            <b-dropdown-item @click="openSpeedModal">Speed</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Lang" right v-if="$route.name === 'Event'">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">DE</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>



    <VolumeModal ref="volumeModal"/>
    <AskModal ref="askModal"/>
    <QuestionModal ref="questionModal"/>
    <SpeedModal ref="speedModal"/>
  </div>

</template>

<script>
    import VolumeModal from './modals/VolumeModal'
    import AskModal from './modals/AskModal'
    import QuestionModal from './modals/QuestionModal'
    import SpeedModal from './modals/SpeedModal'

    export default {
      name: 'Navigation',
      components: {
        QuestionModal,
        VolumeModal,
        AskModal,
        SpeedModal
      },
      props: {
        variant: 'warning'
      },
      data () {
        return {
          searchtext: '',
          route: '',
          isModalVisible: false
        }
      },
      created () {
        console.log(this)
      },
      methods: {
        search () {
          console.log(this.searchtext)
          if (this.searchtext === 'MamaLauda') {
            this.$refs.volumeModal.$refs.modal.show()
          } else {
            this.$refs.askModal.$refs.modal.show()
          }
        },
        openQuestionModal () {
          this.$refs.questionModal.$refs.modal.show()
        },
        openVolumeModal () {
          this.$refs.volumeModal.$refs.modal.show()
        },
        openSpeedModal () {
          this.$refs.speedModal.$refs.modal.show()
        },
        openAskModal () {
          this.$refs.askModal.$refs.modal.show()
        },
        nextSlide () {
          const routeParams = this.$route.params
          routeParams.slideId = 1 + Number(routeParams.slideId)
          this.$router.replace({name: 'Event', params: routeParams})
        }
      }
    }
</script>

<style scoped>
  .navbar{
    background-color: orange;
  }
</style>
