<template>
  <div class="action-panel">
    <div class="action-panel__inner">
      <div class="action-panel__centered-text">
        Your actions will<br>appear here
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
export default class ActionPanel extends Vue {
}
</script>