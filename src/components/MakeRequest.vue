<template>
  <div class="action-panel__tag-customer" :style="{'border':isState!='Make HTTPS request' ? '1px solid #E3E5E8' : '1px solid #0052FF'}" :class="inActiveAction.includes('Make HTTPS request') ? 'side-bar-panel__inactive-action' : ''">
    <div class="action-panel__tag-customer__head">
      <font-awesome-icon icon="shield" class="side-bar-panel__addActions__chevron-left"/>
      Make HTTPS request
    </div>
    <div class="action-panel__hr" v-if="isState == 'Make HTTPS request' ? true : checkShow">
      <hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request endpoint</span>
        <p>{{httpsRequestData.endpoint}}</p>
      </div><hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request method</span>
        <p>{{httpsRequestData.method}}</p>
      </div><hr>
      <div class="action-panel__tag-customer__data-list action-panel__tag-customer__data-list-key">
        <div>
          <span>Key</span>
          <span>Value</span>
        </div>
        <div v-for="(data,index) in httpsRequestData.keyValue" :key="index">
          <p>{{data.key ? data.key : '---'}}</p>
          <p>{{data.value ? data.value : '---'}}</p>
          <hr>
        </div>
      </div><hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request body</span>
        <pre v-if="httpsRequestData.res">{{httpsRequestData.res}}</pre>
      </div>
    </div>
    

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class MakeRequest extends Vue {
  
  get isState(){
    return this.$store.state.search.isState
  }

  get httpsRequestData(){
    return this.$store.state.search.httpsRequestData
  }

  get checkShow(){
    return ['Make HTTPS request','action','add-actions'].includes(this.isState) && this.httpsRequestData.endpoint != ''
  }

  get inActiveAction(){
    return this.$store.state.search.inActiveAction
  }
}
</script>