<template>
  <div>
      <div class="side-bar-panel__action-area__req-head">
        <span>Request endpoint</span>
        <b-form-input placeholder="Enter endpoint..." v-model="httpsRequestData.endpoint"></b-form-input>
      </div>

      <div class="side-bar-panel__action-area__req-head">
        <span>Request method</span>
        <b-form-select v-model="httpsRequestData.method" :options="optionsMethod" class="mb-3">
          <template #first >
            <b-form-select-option :value="null" disabled>Choose method...</b-form-select-option>
          </template>
        </b-form-select>
        <div class="side-bar-panel__action-area__key-value">
          <div class="side-bar-panel__action-area__key-value__head" style="border:none">
            <div>Key</div>
            <div>Value</div>
            <div class="action">
              <font-awesome-icon icon="plus" @click="addKeyValue()"/>
            </div>
          </div>
          <div v-for="(item,index) in httpsRequestData.keyValue" :key="index" class="side-bar-panel__action-area__key-value__head">
            <input v-model="item.key" placeholder="enter key..." class="key-value"/>
            <input v-model="item.value" placeholder="enter value..." class="key-value"/>
            <div class="action">
              <font-awesome-icon icon="trash" @click="removeKeyValue(index)"/>
            </div>
          </div>
        </div>
      </div>

      <div class="side-bar-panel__action-area__req-head">
        <span>Request body</span>
        <b-form-textarea rows="5" v-model="httpsRequestData.res" placeholder="Enter endpoint..."></b-form-textarea>
      </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class MakeReqSidebar extends Vue {
  get isState(){
    return this.$store.state.search.isState
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

  optionsMethod = [
    { text: 'Post', value: 'Post' },
    { text: 'Put', value: 'Put' },
    { text: 'Delete', value: 'Delete' },
    { text: 'Put', value: 'Put' },
  ]

  addKeyValue(){
    this.httpsRequestData.keyValue.push({key:'',value:''})
  }
  removeKeyValue(index:number){
    this.httpsRequestData.keyValue.splice(index, 1)
  }
  get httpsRequestData(){
    return this.$store.state.search.httpsRequestData
  }
}
</script>