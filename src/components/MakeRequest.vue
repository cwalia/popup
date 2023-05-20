<template>
  <div class="action-panel__tag-customer">
    <div class="action-panel__tag-customer__head">
      <font-awesome-icon icon="shield" class="side-bar-panel__addActions__chevron-left"/>
      {{isState}}
    </div>
    <div class="action-panel__hr">
      <hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request endpoint</span>
        <p>amamxo</p>
      </div><hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request method</span>
        <p>amamxo</p>
      </div><hr>
      <div class="action-panel__tag-customer__data-list action-panel__tag-customer__data-list-key">
        <div>
          <span>Key</span>
          <span>Value</span>
        </div>
        <div>
          <p>user</p>
          <p>data</p>
        </div>
      </div><hr>
      <div class="action-panel__tag-customer__data-list">
        <span>Request body</span>
        <p>amamxo</p>
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
  get userTagsList(){
    return this.$store.state.search.userTagsList
  }
}
</script>