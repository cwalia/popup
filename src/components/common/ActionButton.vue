<template>
  <div class="action-button">
    <div class="action-button__button-bar">
        <div class="action-button__icon-text">
          <font-awesome-icon :icon="buttonData.iconName" />
          {{buttonData.text}}
        </div>
        <b-form-checkbox v-model="actionSelectedList" :value="buttonData.text" :name="buttonData.text"></b-form-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class ActionButton extends Vue {
  @Prop() private buttonData!: any;
  get actionSelectedList(){
    return this.$store.state.search.actionSelectedList
  }
  set actionSelectedList(v){
    this.$store.commit('search/setActionSelectedList',v)
  }
}
</script>