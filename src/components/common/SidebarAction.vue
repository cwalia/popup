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
      <div class="side-bar-panel__input-container side-bar-panel__input-action">
        <i class="fa fa-plus"></i>
        <input type="text" placeholder="Add tag..." @keyup.enter="addTags()" v-model="userTags">
      </div>
      <div v-for="(item,index) in userTagsList" :key="index" class="side-bar-panel__tags-list">
        <div>
        <font-awesome-icon icon="circle" :style="{'color':item.color}"/>
          {{item.text}}
        </div>
        <font-awesome-icon icon="trash" class="side-bar-panel__tags-list__trash" @click="removeTag(index)"/>
      </div>
    </div>

    <div  v-else-if="isState == 'Make HTTPS request'" class="side-bar-panel__action-area">
      <div class="side-bar-panel__action-area__req-head">
        <span>Request endpoint</span>
        <b-form-input placeholder="Enter endpoint..."></b-form-input>
      </div>

      <div class="side-bar-panel__action-area__req-head">
        <span>Request method</span>
        <b-form-select v-model="selectedMethod" :options="optionsMethod" class="mb-3">
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
          <div v-for="(item,index) in reqKeyValue" :key="index" class="side-bar-panel__action-area__key-value__head">
            <input v-model="item.key" placeholder="enter key..." class="key-value"/>
            <input v-model="item.vaue" placeholder="enter value..." class="key-value"/>
            <div class="action">
              <font-awesome-icon icon="trash" @click="removeKeyValue(index)"/>
            </div>
          </div>


        </div>
      </div>

      <div class="side-bar-panel__action-area__req-head">
        <span>Request body</span>
        <b-form-textarea rows="5" placeholder="Enter endpoint..."></b-form-textarea>
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
export default class SidebarAction extends Vue {
  userTags = ''
  selectedMethod = null
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
  getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  }
  addTags(){
    this.$store.state.search.userTagsList.push({color:this.getRandomColor(),text:this.userTags})
    this.userTags = ''
  }
  get userTagsList(){
    return this.$store.state.search.userTagsList
  }
  removeTag(index:number){
    this.userTagsList.splice(index, 1)
  }
  getAction(src:string){
    src == 'Make inactive' ? this.$store.dispatch('search/pushInActiveAction',this.isState) : ''
  }

  optionsMethod = [
    { text: 'Post', value: 'Post' },
    { text: 'Put', value: 'Put' },
    { text: 'Delete', value: 'Delete' },
    { text: 'Put', value: 'Put' },
  ]
  reqKeyValue = [
    {key:'',value:''},
    {key:'',value:''},
  ]
  addKeyValue(){
    this.reqKeyValue.push({key:'',value:''})
  }
  removeKeyValue(index:number){
    this.reqKeyValue.splice(index, 1)
  }
}
</script>