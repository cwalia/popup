<template>
  <div class="action-panel__tag-customer">
    <div class="action-panel__tag-customer__head">
      <font-awesome-icon icon="user-tag" class="side-bar-panel__addActions__chevron-left"/>
      {{isState}}
    </div>
    <hr v-if="userTagsList.length">
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
}
</script>