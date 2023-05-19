<template>
  <div class="action-panel">
    <tag-customer v-if="isState == 'Tag customer'"></tag-customer>
    <div class="action-panel__inner" v-else :style="{'background-color': isState == 'Tag customer' ? 'white' : '#F9F9F9'}">
      <div class="action-panel__centered-text">
        Your actions will<br>appear here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import TagCustomer from './TagCustomer.vue'

@Component({
  components: {
    TagCustomer
  },
})
export default class ActionPanel extends Vue {
  get isState(){
    return this.$store.state.search.isState
  }
}
</script>