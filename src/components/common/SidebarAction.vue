<template>
  <div>
    <div class="side-bar-panel__addActions">
      <div @click="stateChange('action')">
        <font-awesome-icon icon="chevron-left" class="side-bar-panel__addActions__chevron-left" />
        {{isState}}
      </div>
      <font-awesome-icon icon="ellipsis" class="side-bar-panel__header__ellipsis" id="activeDelete" />
      <b-popover target="activeDelete" triggers="hover click" placement="bottom">
        <div v-for="item in actionList" :key="item.text" class="side-bar-panel__addActions__popover" :style="{'color':item.iconName=='trash'?'#FF2D55':'#475461'}" @click="getAction(item.text)">
          <font-awesome-icon :icon="item.iconName"  />
          {{item.text}}
        </div>
      </b-popover>
    </div>
    <div class="side-bar-panel__action-area" v-if="isState == 'Tag customer'">
      <tag-cus-sidebar></tag-cus-sidebar>
    </div>

    <div  v-else-if="isState == 'Make HTTPS request'" class="side-bar-panel__action-area">
      <make-req-sidebar></make-req-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import MakeReqSidebar from '@/components/MakeReqSidebar.vue'
import TagCusSidebar from '@/components/TagCusSidebar.vue'
@Component({
  components: {
    MakeReqSidebar,TagCusSidebar
  },
})
export default class SidebarAction extends Vue {
  actionList = [
    {iconName:'toggle-off',text:'Make inactive'},
    {iconName:'trash',text:'Delete action'},
  ]
  
  get isState(){
    return this.$store.state.search.isState
  }
  stateChange(param:string){
    this.$store.commit('search/setIsState',param)
  }

  get confirmedActions(){
    return this.$store.state.search.confirmedActions
  }

  getAction(src:string){
    if(src=='Make inactive'){
      this.isState == 'Tag customer' ? this.$store.commit('search/setUserTagsList',[]) : this.$store.commit('search/setEndpoint','')
      this.$store.dispatch('search/pushInActiveAction',this.isState)
    }else{
      const index = this.confirmedActions.indexOf(this.isState);
      if (index > -1) {
        this.confirmedActions.splice(index, 1)
      }
      this.$store.commit('search/setIsState','action')
    }
  }
}
</script>