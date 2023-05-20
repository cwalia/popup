<template>
  <div class="action-panel__tag-customer" :style="{'border':isState!='Tag customer' ? '1px solid #E3E5E8' : '1px solid #0052FF'}" :class="inActiveAction.includes('Tag customer') ? 'side-bar-panel__inactive-action' : ''">
    <div class="action-panel__tag-customer__head">
      <font-awesome-icon icon="user-tag" class="side-bar-panel__addActions__chevron-left"/>
      Tag customer
    </div>
    <hr v-if="['Tag customer','action','add-actions'].includes(isState) && userTagsList.length">
    <div v-for="(item,index) in userTagsList" :key="index" class="action-panel__tag-customer__tags-list">
      <font-awesome-icon icon="circle" :style="{'color':item.color}"/>
        {{item.text}}
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class TagCustomer extends Vue {
  
  get isState(){
    return this.$store.state.search.isState
  }
  get userTagsList(){
    return this.$store.state.search.userTagsList
  }

  get inActiveAction(){
    return this.$store.state.search.inActiveAction
  }
}
</script>