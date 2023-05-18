<template>
  <div class="side-bar-panel">
    <div class="side-bar-panel__header">
      <div>
        <font-awesome-icon icon="bolt" class="side-bar-panel__header__bolt"/>
        Action
      </div>
      <font-awesome-icon icon="ellipsis" class="side-bar-panel__header__ellipsis" />
    </div>
    <div class="side-bar-panel__assActions">
      Assigned actions
      <div class="side-bar-panel__assActions__sub-head">The selected actions will run in the background when the user journey gets to this element</div>
      <button @click="actionChange()">
        Add actions
        <font-awesome-icon icon="plus" class="side-bar-panel__header__plus" />
      </button>
    </div>
    
    <div class="side-bar-panel__action-area">
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
  get isAction(){
    return this.$store.state.search.isAction
  }
  actionChange(){
    // this.$store.commit('/search/')
  }
  actionButtonList = [
    {
      iconName : 'tag',
      text : 'Tag customer',
      checkboxValue : false,
    },{
      iconName : 'tag',
      text : 'Tag order',
      checkboxValue : false,
    },{
      iconName : 'hey',
      text : 'Send email notification',
      checkboxValue : false,
    },{
      iconName : 'hey',
      text : 'Select digital product',
      checkboxValue : false,
    },{
      iconName : 'hey',
      text : 'Make HTTPS request',
      checkboxValue : false,
    },
  ]
}
</script>