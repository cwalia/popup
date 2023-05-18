<template>
  <div class="side-bar-panel">
    <div class="side-bar-panel__header">
      <i class="fa fa-bolt"></i>
      Action
    </div>
    <div class="side-bar-panel__assActions">
      Assigned actions
      <div class="side-bar-panel__assActions__sub-head">The selected actions will run in the background when the user journey gets to this element</div>
      <button>
        Add actions</button>
    </div>
    
    <div class="side-bar-panel__action-area">
      <!-- <b-input-group class="mt-3">
        <template #prepend>
          <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
        </template>
        <b-form-input></b-form-input>
      </b-input-group> -->
      <div class="side-bar-panel__action-area__input-container">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Username">
      </div>
      <action-button :buttonData="actionButtonList[0]"></action-button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import ActionButton from './common/ActionButton.vue';
@Component({
  components: {
    ActionButton
  },
})
export default class SideBarPanel extends Vue {
  actionButtonList = [
    {
      iconName : 'hey',
      text : 'Tag customer',
      checkboxValue : false,
    }
  ]
}
</script>