<template>
  <div class="side-bar-panel">
    <div v-if="isState == 'action'">
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
        <div class="side-bar-panel__add-actions">
          <button v-for="item in fetchConfirmedActions" :key="item.iconName" class="side-bar-panel__assActions__sel-buttons" @click="stateChange(item.text)" :disabled="inActiveAction.includes(item.text)">
            <div>
              <font-awesome-icon :icon="item.iconName"/>
              {{item.text}}
            </div>
            <div v-if="inActiveAction.includes(item.text)" class="side-bar-panel__assActions-inactive">
              <font-awesome-icon icon="circle"/>
              Inactive
            </div>
          </button>
          <button @click="stateChange('add-actions')" class="side-bar-panel__assActions__action-button">
            Add actions
            <font-awesome-icon icon="plus" class="side-bar-panel__header__plus" />
          </button>
        </div>
      </div>
    </div>
    
    <div v-else-if="isState == 'add-actions'">
      <div class="side-bar-panel__addActions" @click="stateChange('action')">
        <div>
          <font-awesome-icon icon="chevron-left" class="side-bar-panel__addActions__chevron-left" />
          Add actions
        </div>
      </div>
      <div class="side-bar-panel__action-area">
        <div class="side-bar-panel__input-container">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Search actions..." v-model="searchQuery">
        </div>
        <div v-if="nativeApps.length>0">
          <div class="side-bar-panel__light-heading">Native Popup actions</div>
          <action-button v-for="item in nativeApps" :key="item.iconName" :buttonData="item" @checkBoxSel=checkBoxSel()></action-button>
        </div>
        <div v-if="otherApps.length>0">
          <div class="side-bar-panel__light-heading">Integrations with other apps</div>
          <action-button :buttonData="otherApps[0]"></action-button>
        </div>
        <div v-if="nativeApps.length==0 && otherApps.length==0" class="side-bar-panel__light-heading">No result found...</div>
      </div>
      <div class="side-bar-panel__bottom-buttoms" v-if="!compareArrays">
        <b-button variant="outline-secondary" @click="cancelSelection()">Cancel</b-button>
        <b-button variant="primary" @click="confirmSelection()">Confirm</b-button>
      </div>
    </div>

    <div v-else>
      <sidebar-action></sidebar-action>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import ActionButton from './common/ActionButton.vue';
import SidebarAction from './common/SidebarAction.vue'
@Component({
  components: {
    ActionButton,SidebarAction
  },
})
export default class SideBarPanel extends Vue {
  searchQuery = ''
  get isState(){
    return this.$store.state.search.isState
  }
  stateChange(param:string){
    this.$store.commit('search/setIsState',param)
  }
  actionButtonList = [
    {
      iconName : 'user-tag',
      text : 'Tag customer',
      checkboxValue : false,
    },{
      iconName : 'tag',
      text : 'Tag order',
      checkboxValue : false,
    },{
      iconName : 'envelope',
      text : 'Send email notification',
      checkboxValue : false,
    },{
      iconName : 'clipboard-list',
      text : 'Select digital product',
      checkboxValue : false,
    },{
      iconName : 'shield',
      text : 'Make HTTPS request',
      checkboxValue : false,
    },{
      iconName : 'download',
      text : 'Send data to Google Sheet',
      checkboxValue : false,
    }
    
  ]
  get otherApps(){
    return this.filteredList.filter(item => item.text == 'Send data to Google Sheet')
  }
  get filteredList() {
    return this.actionButtonList.filter(item => {
      return item.text.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
  get nativeApps(){
    return this.filteredList.filter(item => item.text != 'Send data to Google Sheet')
  }
  get actionSelectedList(){
    return this.$store.state.search.actionSelectedList
  }
  get confirmedActions(){
    return this.$store.state.search.confirmedActions
  }
  cancelSelection(){
    this.$store.commit('search/setIsState','action')
  }
  confirmSelection(){
    this.$store.dispatch('search/confirmedActions',this.actionSelectedList)
  }
  get fetchConfirmedActions() {
    return this.actionButtonList.filter((item:any) => {
      return this.confirmedActions.includes(item.text);
    });
  }
  get inActiveAction(){
    return this.$store.state.search.inActiveAction
  }
  get compareArrays() {
    return this.confirmedActions.length === this.actionSelectedList.length && this.confirmedActions.every((value:string, index:number) => value === this.actionSelectedList[index]);
  }
}
</script>