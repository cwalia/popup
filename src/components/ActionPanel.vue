<template>
  <div class="action-panel">
    <tag-customer v-if="confirmedActions.includes('Tag customer') && isState!='Make HTTPS request'"></tag-customer>
    <make-request v-if="confirmedActions.includes('Make HTTPS request') && isState!='Tag customer'"></make-request>
    <div v-if="confirmedActions.length==0" class="action-panel__inner" :style="{'background-color': isState == 'Tag customer' ? 'white' : '#F9F9F9'}">
      <div class="action-panel__centered-text">
        Your actions will<br>appear here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import TagCustomer from './TagCustomer.vue'
import MakeRequest from './MakeRequest.vue'

@Component({
  components: {
    TagCustomer,MakeRequest
  },
})
export default class ActionPanel extends Vue {
  get isState(){
    return this.$store.state.search.isState
  }
  get confirmedActions(){
    return this.$store.state.search.confirmedActions
  }
}
</script>