<template>
  <div class="mainApp">
    <side-bar-panel></side-bar-panel>
    <action-panel></action-panel>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import ActionPanel from './ActionPanel.vue';
import SideBarPanel from './SideBarPanel.vue';
@Component({
  components: {
    ActionPanel,SideBarPanel
  },
})
export default class HomePage extends Vue {
}
</script>