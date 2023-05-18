<template>
  <div class="action-button">
    <div class="action-button__button-bar">
        <div class="action-button__icon-text">
            {{buttonData.text}}
        </div>
        <b-form-checkbox v-model="buttonData.checkboxValue"></b-form-checkbox>
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

}
</script>