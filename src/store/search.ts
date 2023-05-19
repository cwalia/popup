import {ActionTree, GetterTree, MutationTree} from "vuex";
import {sample} from "@/api/result";

interface State {
  isState:string,
  actionSelectedList:[],
  confirmedActions:string[],
  selectedAction:string,
  userTagsList:[]
}

const state: State = {
  isState:'action',
  actionSelectedList:[],
  confirmedActions:['Tag customer','Make HTTPS request'],
  selectedAction:'',
  userTagsList:[]
}

const mutations = <MutationTree<State>>{
  setIsState(state,payload:string){
    state.isState=payload
  },
  setActionSelectedList(state,payload:[]){
    state.actionSelectedList=payload
  },
  setConfirmedActions(state,payload:[]){
    state.confirmedActions=payload
  },
  setSelectedAction(state,payload:string){
    state.selectedAction=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async sample({commit, state},) {
    const data = await sample()
  }
};

const getters = <GetterTree<State, any>>{
  getSample(state, getters) {
    return state.isState
  },
}

const search = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default search;